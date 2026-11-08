# Mobile Engineer Portfolio

Minimal, responsive portfolio for a senior iOS and mobile engineer, featuring NEXT, Reiss, Victoria's Secret and ChartBuilder.

## Local development

Install Node.js 20+ then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalise before publishing

- In `app/page.tsx`, replace `hello@example.com`, `yourusername` and `yourprofile` with your actual contact details.
- Update the displayed name, project descriptions and links. Reiss and Victoria's Secret have deliberately generic descriptions until your specific contributions are confirmed.
- Replace the stylised project placeholders with screenshots you have permission to publish, if desired.
- Optional: update the title and description in `app/layout.tsx`.

## Deploy to GitHub Pages

1. Create a **public** GitHub repository, e.g. `portfolio`.
2. Push these files to the repository's `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. In the GitHub repository, go to **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. Open the **Actions** tab to see the deployment progress. The site will be available at `https://YOUR_USERNAME.github.io/portfolio/` (assuming the repository is named `portfolio`).
5. Every push to `main` triggers a new deployment.

The Next.js config automatically adds the GitHub repository name as the base path in Actions for project sites, and omits it for `YOUR_USERNAME.github.io` user sites. `output: 'export'` makes the site compatible with static GitHub Pages hosting.

## Tech

Next.js, React, TypeScript, Tailwind CSS, Lucide icons, GitHub Actions, GitHub Pages.
