# jarettwalen.com

Personal site and portfolio for Jarett Walen: artist, writer, and front-end developer.

Built with React + Vite. No CMS, no backend, no tracking. The contact form uses
FormSubmit as a zero-maintenance relay; everything else is static.

## Structure

- `src/App.jsx` composes the page sections in order: Hero, About, Portfolio,
  Commissions, Comic, Shop, Contact, Footer.
- Alternating section backgrounds are handled by the `section-alt` class.
- `src/components/Portfolio.jsx` builds the gallery from the artwork in
  `public/art`, with alt text kept in one place in the component.
- The accent color (`#F92672`) and the dark/light section palette live in
  `src/styles.css` as custom properties.

## Local development

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # production build to /dist
```

Deployed on Netlify via GitHub pushes to `main`.

## Why these choices

- **Vite over Create React App.** CRA is in maintenance mode, Vite is faster,
  and I didn't need a framework for a single page.
- **No backend.** The whole site is static, so there's nothing to maintain,
  patch, or pay for. The contact form goes through FormSubmit instead of me
  running a mail server or a serverless function for exactly one form.
- **No tracking, no analytics.** If someone is here, they're here to look at
  art or hire me. Neither requires knowing anything about them beyond what
  they choose to send me.
- **Hand-rolled CSS over a framework.** For a site this size, pulling in
  Tailwind or Bootstrap would weigh more than the site itself. Custom
  properties do the theming, and I know exactly what every line is doing.
- **Alt text kept with the component.** The gallery maps filenames to alt
  text in one place, so adding a piece and its accessible description is a
  single edit.

## Notes

- The Sooper shop link in `Shop.jsx` is intentionally hidden until that shop
  is live; it is commented out in place.
- Artwork and written content are mine; please don't reuse without asking.
