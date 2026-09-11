# Fix: insecure contact form

## Why

Browsers flagged every input on the contact form as "not secure" because
the form POSTed (`method="post"`) to a `mailto:` action — a non-HTTPS
submission target — which triggers the browser's insecure-form warning
on all fields.

## What changed

- `src/pages/contact.astro` — removed the `method`/`action`/`enctype`
  attributes (no more real form POST). On submit, JS now builds a
  `mailto:` link from the field values (subject + body) and navigates
  to it directly, preserving the "opens your email client" behavior
  without ever performing an insecure form submission.

## Notes

- No backend available (static Astro site), so this keeps the mailto
  approach but removes the insecure POST that triggered the warning.
- Requires JS; if disabled, the button does nothing (previously it
  would have insecurely submitted anyway).
