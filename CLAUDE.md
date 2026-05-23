# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - start the Next.js development server.
- `npm run build` - build the Next.js app.
- `npm run start` - serve the production Next.js build locally.
- `npm run lint` - run ESLint.
- `npx vitest run` - run all Vitest tests.
- `npx vitest run src/lib/calculators/__tests__/profit.test.ts` - run a single test file.
- `npx vitest run -t "calculates basic profit correctly"` - run tests matching a test name.
- `npm run preview` - build with OpenNext for Cloudflare and run the Cloudflare preview.
- `npm run deploy` - build and deploy through OpenNext Cloudflare.
- `npm run upload` - build and upload through OpenNext Cloudflare.
- `npm run cf-typegen` - generate Cloudflare environment types.

## Project overview

This is a bilingual Next.js App Router site for seller margin/profit calculators. English pages live under `src/app/(en)` and are served at root paths; Chinese pages live under `src/app/zh`. The root layout in `src/app/layout.tsx` only provides global metadata and CSS, while locale layouts wrap pages with `Header`, `Footer`, and Google Analytics.

Calculator math is centralized in pure TypeScript modules under `src/lib/calculators`. `profit.ts` provides a generic profit engine plus platform wrappers for Amazon FBA, TikTok Shop, Shopify, and Flipkart. `paymentFees.ts` handles gross-to-net and net-to-gross payment fee calculations. `targetPrice.ts` reverse-calculates selling prices for target profit or target margin. Unit tests for these engines are in `src/lib/calculators/__tests__`.

Interactive calculator UI is in client components under `src/components/calculators`. Shared inputs and result presentation use `CalculatorField` and `ResultBreakdown`; full calculator pages compose `ProfitCalculator`, `PaymentFeeCalculator`, or `TargetPriceCalculator` with page-specific field definitions, formulas, examples, FAQs, and related tools.

Content and SEO data are split from the UI. Locale strings are in `src/lib/i18n/en.json` and `src/lib/i18n/zh.json`; locale metadata helpers live in `src/lib/i18n` and `src/lib/content/pages.ts`. Tool slugs and related-tool lookup are in `src/lib/content/tools.ts`, and long-form calculator guides are in `src/lib/content/calculatorGuides.ts`. When adding or renaming a calculator, update both locale route trees, the tool registry, dictionaries, metadata/canonical alternates, guides, navigation, and sitemap-related files as needed.

SEO support components are under `src/components/seo`, including FAQ, breadcrumb, guide, related tools, ad slots, and JSON-LD helpers. Global site metadata is in `src/app/layout.tsx`; individual calculator pages define their own `metadata` with canonical and `zh-CN` alternates. `src/app/robots.ts` points crawlers to `https://sellermargintools.com/sitemap.xml`, and `public/sitemap.xml` is currently a static sitemap.

Styling uses Tailwind CSS v4 via `@import "tailwindcss"` in `src/app/globals.css`, plus a small set of custom utility classes for card shadows, gradients, and result glows. The TypeScript path alias `@/*` maps to `src/*` in both `tsconfig.json` and `vitest.config.ts`.

Deployment targets Cloudflare through `@opennextjs/cloudflare`. `next.config.ts` defines site-wide security headers and initializes OpenNext Cloudflare for dev; `open-next.config.ts` contains the OpenNext Cloudflare config; `wrangler.jsonc` points at `.open-next/worker.js` and `.open-next/assets`.

## Version-specific note

This project uses Next.js 16.2.6. Before making changes that depend on Next.js APIs or conventions, prefer checking the local Next.js docs in `node_modules/next/dist/docs/` because App Router behavior and config details may differ from older Next.js versions.
