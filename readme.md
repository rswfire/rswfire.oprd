# OPRD Volunteer Abuse Archive

Permanent public documentation of systematic volunteer abuse at Oregon Parks & Recreation Department.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## Installation
```bash
git clone https://github.com/rswfire/rswfire.oprd.git
cd rswfire.oprd
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build
```bash
npm run build
```
Exports static site to `out/` directory. Deploy to any static host.

## For Other Documentation Projects

This codebase is intentionally open-source to serve as infrastructure for accountability projects. If you're documenting institutional abuse, workplace retaliation, or systematic misconduct:

1. Fork this repository.
2. Replace content in `app/(archive)/` with your own documentation.
3. Customize components in `components/archive/` for your evidence types.
4. Deploy to your own domain.
5. Build your own permanent public record.

The architecture is designed to be:
- **SEO-optimized** for name-based searches.
- **Evidence-focused** with components for emails, recordings, documents.
- **Permanent** via static export.
- **Accessible** to future researchers and victims.

**You shouldn't have to rebuild this infrastructure from scratch. Use it.**

**If you need assistance, reach out to me at [rsw@rswfire.com](mailto:rsw@rswfire.com).**

## License

### Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)

This archive is freely available for public use with the following terms:

**You are free to:**
- Share — copy and redistribute the material in any medium or format for any purpose.

**Under the following terms:**
- **Attribution** — You must give appropriate credit to Robert Samuel White, provide a link to the license, and indicate if changes were made.
- **NoDerivatives** — If you remix, transform, or build upon the material, you may not distribute the modified material.

**Why NoDerivatives:**
This archive contains verified documentation of institutional abuse. Allowing modifications would enable distortion of evidence, alteration of email correspondence, and corruption of the factual record. The integrity of documentation is essential for accountability.

**For forks:**
You may fork this codebase to study its architecture or adapt its structure for other documentation projects. However, you may not publish modified versions of this specific archive's content.

Full license: https://creativecommons.org/licenses/by-nd/4.0/