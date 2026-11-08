# Mobile Engineer Portfolio

Next.js, TypeScript and Tailwind CSS portfolio, statically exported to GitHub Pages.

## Edit content

All editable professional copy, featured projects, skills, about text, contact settings and social metadata live in `src/content/site.ts`. Search that file for `{{TODO:` to find missing details. Existing short project summaries retain only previously confirmed experience; expanded ownership, dates, team and outcome fields are placeholders.

- Fill in the project details and ChartBuilder migration case study. Add only metrics you can substantiate and details you can share publicly.
- Each skill has an optional `usedOn` field. Replace it with verified evidence, or remove the field to hide its caption.
- Replace `site.contact.linkedin` with an HTTPS profile URL to activate the LinkedIn link. Until then, the placeholder is visible plain text, not a broken link.
- Set `site.contact.showGithub` to `false` to hide GitHub.
- Drop your CV PDF into **`public/cv.pdf`**. The Download CV button points to `/cv.pdf` (with the repository base path where applicable). Until the file is supplied, that URL returns 404; no dummy CV is included.
- `sideProjects` is empty and does not render. Uncomment the example and replace its fields to add a personal/open-source project. It uses the same typed model and card as Featured Work.
- Replace `public/og-image-placeholder.png` with your final 1200 × 630 social image, or update `site.seo.image`. A working placeholder image is included.

## Local development and export

Use Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To verify the production export:

```bash
npm run build
python3 -m http.server 3000 --directory out
```

Open http://localhost:3000 and check Read more with keyboard and touch, contact links, logos, and narrow layouts. `npm start` is not used for static exports.

## GitHub Pages

Every push to `main` runs `.github/workflows/deploy.yml`, builds the static export and deploys `out/`. Pages uses GitHub Actions as the source. The live user site is https://taofeek-allison.github.io/.

`next.config.ts` keeps `output: 'export'`, trailing slashes and unoptimised images. For the user-site repository there is no base path. For a project repository, Actions derives `basePath` and `assetPrefix` from its name; public assets, CV, icons and social metadata use the same prefix. To verify a project-path export locally:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=Taofeek-Allison/portfolio npm run build
```

The workflow is unchanged. This site has no server routes or runtime data requirements.
