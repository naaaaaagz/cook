/* Pure calculations shared by the recipe converter and UI. No DOM or storage. */
(function () {
  'use strict';

  // Only arithmetic and explicitly supplied variables; never execute sheet text.
  function arithmetic(expression, vars) {
    var tokens = String(expression).match(/\d+(?:\.\d*)?|\.\d+|[a-z_]+|[^\s]/gi) || [], at = 0;
    function primary() {
      var token = tokens[at++], value;
      if (token === '+' || token === '-') return (token === '-' ? -1 : 1) * primary();
      if (token === '(') {
        value = sum();
        if (tokens[at++] !== ')') throw new Error('Missing closing parenthesis');
        return value;
      }
      if (/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(token || '')) return Number(token);
      if (Object.prototype.hasOwnProperty.call(vars, token) && typeof vars[token] === 'number') return vars[token];
      throw new Error('Invalid arithmetic token');
    }
    function product() {
      var value = primary();
      while (tokens[at] === '*' || tokens[at] === '/') {
        var operator = tokens[at++], right = primary();
        value = operator === '*' ? value * right : value / right;
      }
      return value;
    }
    function sum() {
      var value = product();
      while (tokens[at] === '+' || tokens[at] === '-') {
        var operator = tokens[at++], right = product();
        value = operator === '+' ? value + right : value - right;
      }
      return value;
    }
    if (tokens.length > 256) throw new Error('Expression is too long');
    var result = sum();
    if (at !== tokens.length || !Number.isFinite(result)) throw new Error('Invalid arithmetic expression');
    return result;
  }

  // A build's step array is immutable while cooking. Cache its dependency graph
  // once; scheduling and timer ticks then walk it in O(steps + dependencies).
  var graphs = new WeakMap();
  function graph(steps) {
    if (graphs.has(steps)) return graphs.get(steps);
    var byId = Object.create(null), deps = Object.create(null), next = Object.create(null);
    var last = Object.create(null), pending = Object.create(null), order = [];
    steps.forEach(function (s) {
      if (byId[s.id]) throw new Error('Duplicate step: ' + s.id);
      byId[s.id] = s;
      next[s.id] = [];
    });
    steps.forEach(function (s) {
      var required = s.deps.slice();
      if (last[s.thread]) required.push(last[s.thread]);
      last[s.thread] = s.id;
      deps[s.id] = Array.from(new Set(required));
      pending[s.id] = deps[s.id].length;
      deps[s.id].forEach(function (id) {
        if (!byId[id]) throw new Error('Unknown dependency: ' + id);
        next[id].push(s.id);
      });
      if (!pending[s.id]) order.push(s);
    });
    for (var i = 0; i < order.length; i++) {
      next[order[i].id].forEach(function (id) {
        if (--pending[id] === 0) order.push(byId[id]);
      });
    }
    if (order.length !== steps.length) throw new Error('Recipe has a dependency cycle');
    var result = { deps: deps, next: next, order: order };
    graphs.set(steps, result);
    return result;
  }

  function schedule(steps, remaining) {
    var g = graph(steps), start = Object.create(null), end = Object.create(null), total = 0;
    g.order.forEach(function (s) {
      start[s.id] = g.deps[s.id].reduce(function (max, id) { return Math.max(max, end[id]); }, 0);
      end[s.id] = start[s.id] + (remaining ? remaining(s) : s.duration);
      total = Math.max(total, end[s.id]);
    });
    return { start: start, total: total };
  }

  window.CookCore = { arithmetic: arithmetic, graph: graph, schedule: schedule };
})();
