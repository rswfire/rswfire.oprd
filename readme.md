# @rswfire/rswfire.oprd

[![Next.js](https://img.shields.io/badge/Next.js-16.0-blue)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-orange)](https://www.typescriptlang.org)
[![Documentation](https://img.shields.io/badge/Status-Active-green)](https://oprdvolunteerabuse.org)
[![License](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey)](https://creativecommons.org/licenses/by-nd/4.0/)
[![Developer](https://img.shields.io/badge/Creator-@rswfire-red)](https://rswfire.com/handshake)

Permanent public documentation of systematic volunteer abuse at the **Oregon Parks & Recreation Department**, and the correspondence record of what followed: public records requests, agency responses, and petitions before the Oregon Attorney General, across four state and federal agencies.

> **Why I built this archive**: to correct an epistemic violation.
>
> They wanted to impose their narrative over what actually happened.
>
> They wanted me to live inside their fiction.
>
> This was my refusal.

Live at **[oprdvolunteerabuse.org](https://oprdvolunteerabuse.org)**.

---

## What This Contains

**Evidence** (`/evidence`) documents what happened, in nine stages, from the origin event in February 2025 through the police visit of March 24, 2026. Every claim is supported by audio recordings, video, email correspondence, or official documents.

**Accountability** (`/accountability`) is the correspondence record for the matter, organized by agency:

- Oregon Parks & Recreation Department
- Oregon State Police (Public Records Request PR27478)
- Oregon Department of Administrative Services (R000879, R000885)
- U.S. Forest Service

Each register lists, in date order, the correspondence between that agency and me. Each entry is posted in two forms: a rendered PDF, and the unmodified original email file (`.eml`) exactly as sent or received. Every exhibit filed with the Attorney General in the pending petitions appears in the same form in which it was filed.

## Verifiability

- **Unmodified originals.** The `.eml` files under `public/records/*/eml/` retain their complete message headers, including DKIM signatures applied by the sending domains and ARC seals applied in transit. Any alteration to a signed message invalidates its signature. `.gitattributes` marks `*.eml` binary so git stores them byte-exact.
- **Independent of me.** Authenticity can be established with standard tools, without reference to me and without reliance on my rendering of any document.
- **Timestamped.** The git history of this repository establishes when each document was published.
- **Decentered, not hidden.** The rendered layer of the archive refers to the local staff by role. That is a choice about emphasis, not concealment; the unmodified originals are complete.

## Repository Layout

```
app/(archive)/          Pages: evidence, accountability, timeline, resources
data/threads.ts         The accountability registers as data: one Filing per document
data/*.ts               Transcribed primary transmissions
components/             RecordsThread, FilingDocs, and the archive components
public/records/         Rendered PDFs and unmodified .eml originals, by agency
public/correspondence/  Earlier correspondence in unmodified .eml form
```

A new development in any matter is one appended `Filing` in `data/threads.ts` plus its files under `public/records/`; the register pages, homepage section, and contents tables render from that data.

---

# Archive Videos

All videos are available as direct downloads from this repository's releases:

- [2025-03-05 Coercion Meeting](https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability/2025-03-05_coercion-meeting.mkv) (78.5 MB)
- [2025-03-18 Surveillance Encounter](https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability/2025-03-18_surveillance-encounter.mkv) (53 MB)
- [2025-03-24 Dismissal Recording](https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability/2025-03-24_dismissal-recording.mkv) (189 MB)
- [2025-03-25 Expulsion Recording](https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability/2025-03-25_expulsion-recording.mkv) (92.7 MB)
- [2025-03-27 Public Record](https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability/2025-03-27_public-record.mkv) (140 MB)
- [2025-12-20 What Happened](https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability/2025-12-20_what-happened.mkv) (633 MB)

These videos are also hosted on [Autonomy Realms](https://rswfire.com), embedded throughout the archive.

---

## Installation

```bash
git clone https://github.com/rswfire/rswfire.oprd.git
cd rswfire.oprd
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and Deploy

```bash
npm run build
```

Exports the static site to `out/`. The live site deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`; no server is involved.

## For Other Documentation Projects

This codebase is intentionally open-source to serve as infrastructure for accountability projects. If you're documenting institutional abuse, workplace retaliation, or systematic misconduct:

1. Fork this repository.
2. Replace content in `app/(archive)/` with your own documentation.
3. Define your own registers in `data/threads.ts`; one data object per matter renders a complete document register with contents, descriptions, downloads, and originals.
4. Place your documents under `public/records/`, originals unmodified.
5. Deploy to your own domain.
6. Build your own permanent public record.

The architecture is designed to be:
- **SEO-optimized** for name-based searches.
- **Evidence-focused** with components for emails, recordings, documents, and document registers.
- **Verifiable** through unmodified originals and git history.
- **Permanent** via static export.
- **Accessible** to future researchers and victims.

**You shouldn't have to rebuild this infrastructure from scratch. Use it.**

**If you need assistance, reach out to me at [rswfire.com](https://rswfire.com).**

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
