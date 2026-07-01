# DoorToDoor Marketing — Website

A professional, image-rich React (Vite) website for a door-to-door / field marketing
company. No backend or database — the contact form opens a pre-filled email as a
placeholder until you wire up a real form service or API.

## 1. Run it in VS Code

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

To build a production-ready version:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## 2. Project structure

```
src/
  components/   Navbar, Footer, Hero, ServicesGrid, ProcessPath, etc.
  pages/        Home, Services, About, Contact
  data.js       All editable copy — services, stats, testimonials, contact info
  index.css     Design tokens (colors/fonts) + all styling
```

**To edit content** (company name, phone, services, stats): open `src/data.js`.
**To change colors/fonts**: edit the `:root` variables at the top of `src/index.css`.

Images currently link to Unsplash (free-to-use stock photos) so the site looks
finished immediately. Swap any `img` URL in `src/data.js` or a component for your
own photos whenever you're ready — for local images, drop files in `src/assets/`
and `import` them, or in `public/` and reference by `/filename.jpg`.

## 3. Push it to your GitHub

```bash
git init
git add .
git commit -m "Initial commit — DoorToDoor Marketing website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 4. Host it on your custom domain

This is a static site (plain HTML/CSS/JS after build), so any of these work well
and all support free custom-domain HTTPS:

### Option A — Vercel (recommended, easiest)
1. Go to vercel.com → **New Project** → import your GitHub repo.
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
3. Deploy → then go to **Project → Settings → Domains** → add your domain and
   follow the DNS instructions (usually a CNAME or A record at your domain registrar).

### Option B — Netlify
1. netlify.com → **Add new site → Import an existing project** → pick your repo.
2. Build command: `npm run build`, publish directory: `dist`.
3. **Domain settings → Add custom domain** → update DNS as instructed.

### Option C — GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. In `vite.config.js`, add `base: '/<your-repo-name>/'` (skip this if using a custom domain).
4. Run `npm run deploy`, then in your repo **Settings → Pages** set the source branch,
   and under **Custom domain** add your domain + create a CNAME record at your registrar.

Any of these will serve your site at your own domain once DNS propagates
(usually a few minutes to a few hours).

## 5. Next steps you may want

- Connect the contact form to Formspree, a serverless function, or your own API.
- Add Google Analytics / Plausible for traffic tracking.
- Replace stock images with real team/campaign photography.
- Add a blog or case-studies page once you have client results to showcase
