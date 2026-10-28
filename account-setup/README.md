# Cook email accounts — setup and launch requirements

The owner reports creating the Supabase project, running schema.sql, configuring
Resend SMTP and saving the signup email template. These hosted steps and real email
delivery have not yet been independently tested. Registration is now enabled locally
for owner-authorised testing; the owner will commit/push/sync the files themselves.
The configured shared Resend sender only delivers to the Resend account's exact email
address. Complete the privacy details and live checks below before public launch.
Google/Facebook/favourites are out of scope.

## 1. Managed database and authentication

Create a Supabase project you own; select an EU region and keep the database password
in an approved password manager or ignored local .env. Enable Email/Password Auth,
Confirm email, and a minimum password length of 12. Use HTTPS for the public site.
Keep the Auth password maximum consistent with bcrypt's 72-byte limit. Enable
leaked-password protection if available on the selected plan. Restrict signup and
email rate limits, review abuse monitoring, and enable supported server-validated
CAPTCHA before opening unrestricted public signup. A browser-only maths check is
not protection. CAPTCHA integration remains pending until the provider is chosen;
do not enable it in Supabase without wiring the token into the forms.

Run schema.sql ONCE in the new project's SQL editor. It creates user_settings,
validation functions and per-user row-level security. Existing tables are not
replaced or deleted. If a name already exists, the transaction fails; inspect rather
than dropping existing data. Passwords/email remain in Supabase Auth, not this table.
Anonymous users have no access. Verified users can read/write only their own row.
The browser has no administrative/deletion permission; the operator handles account
deletion in Supabase Auth, which cascades to the settings row. Backups need a separate
documented expiry policy. Apply and verify this schema before providing browser access.

## 2. Site URL and email

Decide the actual homepage URL, including a project subpath and index.html if used.
Set Supabase Auth -> URL Configuration -> Site URL to that exact homepage, for
example https://your-domain.example/cook/index.html. Add exact allowed development
and production redirect URLs; avoid broad production wildcards. Testing on a phone
uses the HTTPS test hostname, not the desktop machine's localhost.

Choose a transactional email provider supporting SMTP (for example Resend). Verify
a sender domain with the provider's DNS records (SPF/DKIM and an appropriate DMARC
policy), preserving existing mail records. Use sender display name Cook and a sender
address you control. GitHub's users.noreply.github.com address protects commit email;
it is not a transactional sending service and cannot be used as Cook's sender.
Enter SMTP credentials only in Supabase's dashboard; never in browser code or chat.
The built-in Supabase sender is limited to approved project-team addresses and is
not sufficient for arbitrary public registrations or plus-alias testing.

In Supabase Auth email templates:
- Confirm signup subject: Confirm your Cook registration
- Confirm signup body: paste confirm-email.html
- Reset password subject: Reset your Cook password
- Reset password body: paste reset-email.html

These are unstyled messages with a visible URL, not a styled action button. Supabase
templates use HTML; check the provider's delivered text alternative too. Disable
email-provider link tracking/link rewriting so the one-time link stays intact.
The token hash is in the URL fragment (not sent to the website host), removed from
the address bar, and verified against Supabase before showing the success pop-over.
It works even if the email opens in a different browser/device. An expired/used link
does not show success. Some mail scanners can consume one-time links; test delivery.

## 3. Public configuration

Only js/account-config.js contains public connection information:
- supabaseUrl: the project's https://PROJECT.supabase.co URL
- publishableKey: Supabase publishable key (or legacy anon key), NEVER a secret or service_role key
- siteUrl: the exact same homepage as the Supabase Site URL, on the current site's origin
- registrationEnabled: true for owner-authorised testing; set false to disable accounts

In tools/page-template.html, replace connect-src's https://*.supabase.co with the
exact project origin. Regenerate pages with node tools/build-pages.cjs. The SDK is
vendored locally, so browsers do not fetch executable code from a CDN. No framework
or build step is needed to serve the generated pages.

## 4. Account behaviour

Email input is trimmed only; plus tags and dots are not removed. peter@gmail.com and
peter+something@gmail.com are separate identities, with separate passwords/settings,
even though Gmail delivers both to the same inbox. Do not use Gmail delivery identity
as the database key. The UUID supplied by Auth identifies each settings row.

Account -> sign in/create/resend/reset. Login loads existing cloud settings. A new
account keeps the current guest kitchen until the user explicitly saves it. Saving
the kitchen waits for the cloud write before navigating; Options saves when closed.
Writes are serialised. On failed cloud saves, changes remain in the tab and can be
retried through Account. Saves replace the settings snapshot; latest successful save
wins across devices. There is no realtime merge. Unsaved layout-editor changes are
not uploaded. No recipe history, ratings, favourites or microphone data is uploaded
to the account database.

Sessions use sessionStorage, not persistent localStorage. A tab usually signs out
when its session ends, but browser restoration may retain it. Separate tabs can use
separate accounts. Sign out clears this tab's Cook choices and session and returns
home. Account -> Download my settings exports email and current settings, no tokens.
Account/privacy text currently uses English; existing recipe translations remain.

## 5. Privacy before launch

Complete the marked draft in tools/page-template.html: operator legal identity and
postal address, monitored privacy contact, website host, email provider, legal bases,
actual international transfer safeguards, security logs, unverified-account expiry,
backup retention and deletion process. Confirm data-processing agreements with the
providers and a documented access/deletion/export request workflow. EU hosting alone
does not guarantee GDPR compliance. Decide whether users need additional local-language
notices. Do not advertise the draft as a final legal assessment or compliance guarantee.

The OK/X bar is a storage INFORMATION notice. Both buttons dismiss it in this tab;
neither authorises optional tracking. No analytics/advertising is introduced. Before
introducing any non-essential storage, add opt-in, equally easy refusal and withdrawal,
and block it until consent. The privacy draft also discloses the existing recipe-list
country.is IP lookup and browser speech service. Review those transfers/legal bases
before public launch; the storage bar does not give consent to them.

## 6. Required live checks (not possible without the real project)

1. Signup base Gmail and +tag addresses; verify both emails, in another browser too.
   Confirm distinct Auth UUIDs and independent saved kitchens/settings. Test dots too
   if desired; never rely on email delivery to separate accounts.
2. Unverified signup cannot log in/read/write settings. Anonymous REST requests must
   fail. With user A's token, reading B's row returns no data, inserting/updating B's
   row is rejected. Attempt changing user_id, extra JSON fields and invalid rectangles.
3. Confirm the full signup/reset messages, From name/address, visible URL, expiry and
   no false success on a used/invalid link. Test reset then login with the new password.
4. Save/load across desktop/mobile, failure/retry, session expiry, reload/navigation,
   sign out and account switching; check no earlier user's kitchen leaks.
5. Test actual rate limits/CAPTCHA and email delivery with chosen service; review
   retention/deletion and backup policy. Configure monitoring and administrator MFA.

## Local checks

node tools/build-pages.cjs --check
node tools/pages-tests.cjs
node tools/review-tests.cjs
node tools/account-tests.cjs
git diff --check

Browser checks require Playwright on NODE_PATH and an installed test browser (or
set COOK_BROWSER_CHANNEL=chrome to use installed Chrome). The database was also
checked with an in-memory PostgreSQL engine using account-setup/schema-tests.cjs;
run it with @electric-sql/pglite on NODE_PATH. That development-only package is not
used by the website. Fixtures simulate Supabase's Auth roles; hosted checks remain.

## SDK provenance

@supabase/supabase-js 2.118.0, downloaded from the official package's jsDelivr
distribution: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.js
SHA256: ee3be8de192b97cb1d73d1e95d6b82bb1f6b658c0f97c4ef757fc331996ed3d3
MIT licence: js/vendor/supabase-LICENSE. Re-vendor a reviewed supported version when updating.

## Sources (checked 2026-10-28)

- Supabase Auth email/password: https://supabase.com/docs/guides/auth/passwords
- Password security: https://supabase.com/docs/guides/auth/password-security
- SMTP: https://supabase.com/docs/guides/auth/auth-smtp
- Email templates: https://supabase.com/docs/guides/auth/auth-email-templates
- RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Browser SDK: https://supabase.com/docs/reference/javascript/installing
- Cookie rules: https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm
- EDPB consent report: https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf
- GitHub email scope: https://docs.github.com/en/account-and-profile/reference/email-addresses-reference
