# Translation review — 2026-11-05

## Status and scope

Partial review: the full set of 44 language sheets has not been reviewed. No translations or generated language packs were changed. The findings are comments for Claude Code to assess and correct.

I checked the explicit recipe-name link targets in the `keep` column across all 44 TSV files: every specified target occurs verbatim in its translation. This checks string presence, not actual links or translation quality. I also inspected selected Japanese cooking steps and English instructions containing explicit negative wording after row 850 in Japanese, Korean, Simplified Chinese and Traditional Chinese. Other rows and languages remain to be reviewed.

## Meaning errors

**Slow-cooked beef, row 737 — eight languages.** English: “It should not be submerged.” The translations instead say that submerging the meat is not necessary, permitting a fully submerged piece. Change the final sentence to state that it should not be submerged, preserving the rest of each row.

- `ja.tsv`: `浸かりきらなくてよい。` Suggested: `完全に浸からないようにする。`
- `ko.tsv`: `잠기지 않아도 돼요.` Suggested: `완전히 잠기지 않게 하세요.`
- `zh-Hans.tsv`: `不需要淹没。` Suggested: `不要让牛肉完全淹没。`
- `zh-Hant.tsv`: `不需要淹沒。` Suggested: `不要讓牛肉完全淹沒。`
- `el.tsv`: `Δεν χρειάζεται να είναι βυθισμένο.` Suggested: `Δεν πρέπει να είναι βυθισμένο.`
- `nl.tsv`: `Het hoeft niet onder te staan.` Suggested: `Het mag niet onderstaan.`
- `th.tsv`: `ไม่จำเป็นต้องจมในน้ำ` Suggested: `อย่าให้เนื้อจมอยู่ในน้ำทั้งหมด`
- `vi.tsv`: `Không cần ngập.` Suggested: `Không để thịt ngập hoàn toàn.`

The suggestions refer to full submersion where relevant; check the intended recipe and local style when applying them. Other languages at this row were inspected for this particular distinction, but that does not constitute a broader review.

## Continue

Review remaining texts for meaning, cooking context, omissions, reversals and language-specific terminology, following `.handoff/TO-CODEX.md` and `tools/translations/GUIDE.md`. Track coverage by language and row. After authorized fixes, validate relevant imports and tests as described in the original handoff.
