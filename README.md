# Saloni Sonawane – Portfolio (React)

The original HTML/CSS/JS portfolio rebuilt as a React single-page app with Vite and React Router.
Design, colors and copy are unchanged: the original `main.css` is reused as-is.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

## Structure

```
public/            static files served as-is (images, videos, resume PDF, favicon)
  img/thumbs/      800px WebP thumbnails used in the portfolio grid
  img/full/        1800px WebP versions shown in the lightbox
  media/           promo videos opened from the Design items
src/
  main.jsx         entry: global CSS + router
  App.jsx          routes
  components/      Layout, Header, Footer, ScrollTop, Preloader, Masonry, SkillBar, ...
  pages/           Home, About (About + Skills), Resume, Services, Portfolio, Contact
  data/            all content: site.js, profile.js, services.js, projects.js
  hooks/           usePageTitle, useInView
  styles/main.css  original template stylesheet
```

## Editing content

- **Add a project:** add an object to `src/data/projects.js` (`category` is `development`, `wordpress` or `design`), and drop its images in `public/img/thumbs` and `public/img/full`. Set `ratio` to thumbnail height ÷ width so the masonry layout balances well.
- **Resume, skills, about text:** `src/data/profile.js`
- **Contact details, social links, nav:** `src/data/site.js`
- **Contact form:** posts to Web3Forms. To use your own key, create `.env` with `VITE_WEB3FORMS_KEY=your-key`.

## Deploying

- **Vercel:** import the repo; framework preset "Vite". `vercel.json` already rewrites all routes to `index.html`, so `/about` etc. work on refresh.
- **Netlify:** add `public/_redirects` containing `/* /index.html 200`.
- **GitHub Pages:** needs a `basename` on the router and a `base` in `vite.config.js`, or switch to `HashRouter`.
