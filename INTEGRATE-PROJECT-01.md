# Add Job Hunter as Case Study B inside Project 01

The repository's existing HTML could not be opened in this session, so **do not overwrite your existing Project 01 pages or homepage**.

## Upload to the root of your public `portafolio` repo

Upload these files, preserving the `demo/` folder:
- `job-hunter.html`
- `job-hunter-es.html`
- `style-jobhunter.css`
- `demo/demo.js`
- `demo/jobs.json`
- `demo/scanner.py`

You can also upload this Markdown guide. All data in this package is synthetic; no personal job search records or CV files.

## English Project 01 — add before the footer

```html
<section aria-labelledby="jobhunter-case" style="border-top:1px solid #d7dfdb;padding:2rem 0;margin-top:3rem">
  <p style="text-transform:uppercase;color:#17675e;letter-spacing:.12em">Case Study B · Automation & AI</p>
  <h2 id="jobhunter-case">AI-Powered Job Market Intelligence</h2>
  <p>A public prototype for vacancy screening, eligibility checks and source-verified recruitment outreach. Real application data stays private.</p>
  <a href="job-hunter.html">Explore Case Study B →</a>
</section>
```

## Spanish Project 01 — add before the footer

```html
<section aria-labelledby="jobhunter-case" style="border-top:1px solid #d7dfdb;padding:2rem 0;margin-top:3rem">
  <p style="text-transform:uppercase;color:#17675e;letter-spacing:.12em">Caso B · Automatización e IA</p>
  <h2 id="jobhunter-case">Inteligencia del mercado laboral con IA</h2>
  <p>Prototipo público para filtrar vacantes, comprobar requisitos y verificar contactos de selección. Los datos personales siguen siendo privados.</p>
  <a href="job-hunter-es.html">Explorar el caso B →</a>
</section>
```

## Optional homepage Project 01 text

EN: `Multi-site reporting, KPI analysis and AI-assisted workflow automation.`

ES: `Reporting operativo, análisis de KPIs y automatización de procesos con IA.`

Leave the homepage card link pointing to the existing Project 01 page, **not** directly to the new page.

## Test

After GitHub Pages publishes, visit:

- `https://YOUR-USER.github.io/portafolio/job-hunter.html`
- `https://YOUR-USER.github.io/portafolio/job-hunter-es.html`

Click the language switch, try the score slider and remote checkbox, verify the demo links, and verify the Case Study B links from your existing Project 01 pages.

## Privacy boundaries

- Public: methodology, Python sample, illustrative fictional dashboard.
- Private: real CVs, matched leads, professional contacts, email drafts, application logs, API credentials.
- Never publish sensitive data in public repo commits, GitHub Actions logs or artifacts.
- The sample scanner **does not** search the internet; live feeds, email verification and AI models are future work.
