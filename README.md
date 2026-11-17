# Camila Harburger Devoto — portfolio foundation

A buildless, multi-page portfolio for GitHub Pages. HTML, CSS and vanilla JavaScript only. No packages, installation or compilation required. This is an unpublished foundation; the existing Google Sites website has not been changed.

## Preview

1. Download and extract the ZIP.
2. Open `index.html` in your browser. Navigation and styling work directly from disk.
3. For automatic refresh while editing, optionally use VS Code's Live Server extension: open this folder, right-click `index.html`, and choose **Open with Live Server**.
4. Alternatively, if Python is already installed, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`. Stop with Ctrl+C.

## File guide

```
index.html                     Homepage
about.html                     About placeholder
experience.html                Experience placeholder
projects.html                  Projects overview
project-operations.html        Operations case study placeholder
project-data.html              R analysis case study placeholder
project-commercial.html        Commercial case study placeholder
contact.html                   Contact placeholder
assets/css/styles.css          All shared styles and responsive layouts
assets/js/main.js              Mobile menu and footer year
assets/favicon.svg             Initials favicon
.nojekyll                      Keeps GitHub Pages serving plain static files
README.md                      This guide
```

## Edit and maintain

- Treat your GitHub repository as the source of truth once you upload it. Give Codex the repository and ask for focused changes, then review its diff and preview before merging.
- Edit page text directly in the relevant HTML file. Styling is shared through `assets/css/styles.css`; change the `:root` color variables to update the palette.
- Header and footer markup are deliberately repeated in each HTML page. This keeps navigation available without JavaScript, fetch requests or a build step. When changing a shared link or label, update all eight HTML files. Keep `aria-current="page"` on the appropriate navigation item; case studies highlight Projects.
- JavaScript only enhances the mobile menu and copyright year. Without it, navigation remains visible and usable.
- Use relative links such as `about.html` and `assets/css/styles.css`. Avoid leading `/` paths: those break when the site lives at `username.github.io/repository-name/`.
- Keep filenames lowercase and hyphenated; GitHub Pages is case-sensitive.
- Test links and mobile layouts after editing. Avoid publishing passwords, private data, raw customer information or confidential work; HTML source is publicly readable when hosted publicly.

## Publish on GitHub Pages — when you are ready

Nothing has been published or connected to GitHub yet. Publishing is a separate action.

1. Create a GitHub repository (for example, `portfolio`). A public repository is the simplest option for a free GitHub Pages site.
2. Upload the **contents** of this folder to the repository root: `index.html` must be at the root, not inside a second `portfolio` folder. Include `.nojekyll` (a blank file; it may be hidden by your file manager).
3. Commit the files to `main`.
4. In the repository, open **Settings → Pages**. Under build and deployment, choose **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
5. Wait for GitHub's deployment to finish and open the URL shown in Pages, usually `https://YOUR-USERNAME.github.io/portfolio/`.
6. Check every page on desktop and mobile. Later commits to the publishing branch update the live site automatically. For changes you want to review first, use a separate branch and merge only after approval.

No custom domain, Actions workflow, framework or build configuration is needed. Your Google Sites portfolio stays separate unless you later choose to replace it or update its links.

## Content status

The existing Google Sites URL could not be fetched during this task. Homepage copy uses the background supplied in conversation: name, Valencia location, English/Spanish languages, accounting and financial management background, and stated areas of interest. About references Exeter and Warwick without asserting graduation status. These details should be reviewed before publication.

The homepage links to three clearly labeled case-study placeholders. The commercial project is explicitly planned. No metrics, outcomes, client claims, testimonials or invented employment details have been added. Contact is a placeholder: it contains no fabricated email address or nonfunctional form. No dashboards, tracking, external fonts, third-party scripts or backend are included.

## Recommended next stage

Ask Codex: “Build out the About and Experience pages using only the CV and text I provide. Keep the current visual design, preserve relative links and do not publish. Flag anything that needs confirmation.”

Then complete one case study at a time using real source materials: context, question, role, methods, evidence, results and limitations. Add confirmed contact links before publishing. Interactive dashboards belong to a later stage.
