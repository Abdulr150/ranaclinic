# Dr. Rana's Clinic — Landing Page

A luxury single-page website for Dr. Rana's Clinic, a beauty, cosmetics and personal care clinic based in Bahrain.

## Live Preview

> After following the GitHub Pages steps below, your site will be live at:
> **`https://<your-username>.github.io/<repo-name>/`**

---

## Project Structure

```
dr-ranas-clinic/
├── index.html        ← Main HTML page
├── css/
│   └── styles.css    ← All styles (Gold · Cream · Charcoal palette)
├── js/
│   └── main.js       ← FAQ accordion, scroll reveal, form handling
└── README.md
```

---

## How to Deploy on GitHub Pages

1. **Create a new GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it anything, e.g. `dr-ranas-clinic`
   - Set it to **Public**
   - Click **Create repository**

2. **Upload the files**
   - Click **"uploading an existing file"** on the repo page
   - Drag and drop the entire `dr-ranas-clinic/` folder contents:
     - `index.html`
     - `css/styles.css`
     - `js/main.js`
     - `README.md`
   - Click **Commit changes**

3. **Enable GitHub Pages**
   - Go to **Settings → Pages** (left sidebar)
   - Under **Source**, select `Deploy from a branch`
   - Set branch to **`main`** and folder to **`/ (root)`**
   - Click **Save**

4. **Your site is live!**
   - After ~60 seconds, visit:
     `https://<your-username>.github.io/<repo-name>/`

---

## Adding Real Photos

Replace any `<div class="img-placeholder">` block with a real `<img>` tag.

**Example — Hero image:**
```html
<!-- Before -->
<div class="hero-img-placeholder">
  <svg ...></svg>
</div>

<!-- After -->
<img src="images/hero.jpg" alt="Dr. Rana's Clinic" style="width:100%;height:100%;object-fit:cover;">
```

**Recommended image folder:**
```
dr-ranas-clinic/
└── images/
    ├── hero.jpg
    ├── dr-rana.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── blog-1.jpg
    ├── blog-2.jpg
    └── blog-3.jpg
```

---

## Customisation

| What to change | Where |
|---|---|
| Clinic name / tagline | `index.html` — `<nav>` and `<footer>` |
| Phone / email / address | `index.html` — `#contact` section |
| Social media links | `index.html` — `footer-socials` `href="#"` |
| Colors | `css/styles.css` — `:root` variables |
| Fonts | `index.html` — Google Fonts `<link>` + `css/styles.css` `:root` |
| Services content | `index.html` — `#services` section |
| Testimonials | `index.html` — `#testimonials` section |
| Blog articles | `index.html` — `#blog` section |
| FAQ answers | `index.html` — `#faq` section |

---

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript — zero dependencies
- Google Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Jost](https://fonts.google.com/specimen/Jost)
- Responsive down to 375px mobile
- Accessible: semantic HTML, `aria-expanded` on FAQ, `aria-label` on social icons
