# ai_memory
Stack: Next 16 App Router + TS + Tailwind 4 (tokens in app/globals.css @theme) + lucide-react. Dir: site/.
Spec: .website/design/{design-system,sections,assets,case-photos}.md; prototypes pages/*.html (truth for texts/order).
Done stage 1: tokens, layout/ui components, content/*.ts, home `/`, stubs for other 11 routes. Report: .website/code-stage1.md.
Stage 2: fill stub pages using components/layout|ui + content/*; breadcrumbs per page, CtaSection on pages per §14.
Rules: no hardcoded colors/px (use tokens/utilities), one h1, real case photos via CaseFigure/ProjectCard(contain), no invented copy.
Gotchas: Button already `inline-flex` -> hide via wrapper div; `next start` kills via `fuser -k PORT/tcp`; avif disabled (slow).
Stage 2B done (08–12): report .website/code-stage2b.md. New: ui/SplitSection, sections/{case-szrt,o-kompanii,stati,kontakty,raschet}, content/{case-szrt,company,articles,quiz}.ts. Unconfirmed data = null in content (founded year, engineers, INN/OGRN, PDFs, docs, review).
Audit fixes (2026-10-01): cases → content/cases.ts + app/proekty/[slug] (template components/sections/case-szrt/CasePage); hubs → content/direction-hubs.ts + app/resheniya/[slug]; SEO: lib/seo.tsx pageMeta (canonical+OG), robots.ts, sitemap.ts, opengraph-image.tsx, icon.svg, not-found.tsx, JSON-LD Org+Breadcrumbs; consent: ui/ConsentCheckbox (+requireConsent) in all 4 forms, /politika-konfidencialnosti. /stati noindex, out of footer. Pending: /api/lead integration (after client OK), INN/OGRN, docs, reviews, SITE_URL confirm. Deletable leftovers: app/proekty/asu-tp-rezinosmesheniya/, content/case-szrt.ts.

## Deploy (demo)
- https://npfproeffect.aszhukov.site → server `ssh aszhukov-new` (138.16.226.40), не трогать aszhukov.site (порт 3000)
- next.config: output standalone; app: /var/www/npfproeffect/current, systemd `npfproeffect` (порт 3200), nginx `sites-available/npfproeffect`, SSL certbot webroot
- Обновить: `npm run build` → rsync .next/standalone/ → current/, .next/static → current/.next/static, public → current/public; chown www-data; `systemctl restart npfproeffect`
