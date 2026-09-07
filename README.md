# My Portfolio

A clean, accessible, and responsive personal portfolio website showcasing my web development work and projects.

## Tech Stack

- **HTML5** — Semantic markup with accessibility-first structure
- **CSS3** — Responsive design with CSS custom properties (variables) for easy theming
- **JavaScript (Vanilla)** — Interactive features without dependencies
- **Hosted on GitHub Pages** — Free static hosting with automatic deployment

## Features

✨ **Accessibility**
- Skip links for keyboard navigation
- ARIA labels and semantic HTML landmarks
- High contrast color scheme with visible focus states
- Screen reader friendly form validation

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop breakpoints
- Hamburger menu for mobile navigation
- Fluid typography and spacing

🎨 **Visual Polish**
- Modern color palette (blue primary, clean grays)
- Professional typography (Playfair Display + Inter)
- Smooth scrolling and hover effects
- Card-based layout system

⚡ **Interactive Elements**
- Animated hamburger menu toggle
- Form validation with error messaging
- Random fun fact API integration (useless facts API)

## Project Structure

```
portfolio/
├── index.html          Home page with hero and featured projects
├── about.html          About section and contact form
├── project.html        Full project gallery
├── styles.css          Global styles and responsive design
├── interactions.js     Navigation, form validation, API calls
├── README.md           This file
├── wireframes/         Design reference files (archived)
├── docs/               Documentation
│   └── accessibility-fixes.md
└── .gitignore          Standard web project ignores
```

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/KharmaIzReal/portfolio.git
   cd portfolio
   ```

2. **Open in your browser**
   - **Option A:** Double-click `index.html`
   - **Option B:** Use a local server (Python)
     ```bash
     python -m http.server 8000
     # Visit http://localhost:8000
     ```
   - **Option C:** Use VS Code Live Server extension

## Live Site

🌐 Visit your portfolio: [https://kharmaizreal.github.io/portfolio](https://kharmaizreal.github.io/portfolio)

## Customization Guide

### Update Your Content
- **index.html**: Change hero text, featured projects
- **about.html**: Add your bio and update the contact form
- **project.html**: Replace placeholder projects with real work

### Change Colors
Edit CSS variables in `styles.css` (lines 1-19):
```css
:root {
  --primary: #2563eb;         /* Change this to your brand color */
  --primary-hover: #1d4ed8;
  --text-main: #1f2937;
  /* ... etc */
}
```

### Update Typography
Replace the Google Fonts links in the HTML `<head>` sections.

## Features to Add

- [ ] Project images/screenshots
- [ ] Social media links in footer
- [ ] Dark mode toggle
- [ ] Blog or articles section
- [ ] PDF resume download
- [ ] Animation library (AOS, Framer Motion)
- [ ] Back-end contact form handling

## Performance

- **Lighthouse Score**: Optimized for Core Web Vitals
- **No external dependencies**: Pure HTML/CSS/JS
- **Small bundle size**: ~15KB total (minified)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Open for personal use. Feel free to modify and share!

---

**Questions or feedback?** Open an issue or reach out through the contact form on your portfolio.
