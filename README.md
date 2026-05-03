# Mech Auto Dynamics — React Website

A 4-page React website for Mech Auto Dynamics, built with React + React Router + Vite.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/contact` | Contact Us |

## Tech Stack

- **React 18** + **React Router v6**
- **Vite** (build tool)
- **CSS Modules** (per-component styles)
- **Google Fonts** (Bebas Neue + Barlow)

---

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:5173`

---

## 📦 Deploy to GitHub Pages

### Option A — Automatic (GitHub Actions)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` will automatically build and deploy

Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

### Option B — Manual

```bash
npm run build
# Then upload the contents of /dist to your host
```

---

## 📁 Project Structure

```
mech-auto-dynamics/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── About.jsx / About.css
│   │   ├── Services.jsx / Services.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx               # Router setup
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customization

- **Colors**: Edit CSS variables in `src/index.css` (`:root`)
- **Contact form**: The form currently shows a success state on submit. To make it functional, integrate with EmailJS, Formspree, or a backend API.
- **Logo**: Replace the text logo in `Navbar.jsx` with an `<img>` tag pointing to your logo file.
