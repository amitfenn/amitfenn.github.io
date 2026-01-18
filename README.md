# Dr. Amit Fenn - Personal Website

A modern, responsive personal website for a computational biologist and startup founder. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference storage
- **Smooth Scrolling**: Enhanced navigation experience with smooth scrolling to sections
- **Modern UI**: Clean, academic-friendly design with gradient accents and animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: No frameworks, pure vanilla JavaScript for optimal performance
- **GitHub Pages**: Automatic deployment via GitHub Actions

## Sections

1. **Hero**: Introduction with name, tagline, and call-to-action buttons
2. **About**: Professional background and current roles
3. **Research**: Research interests and publications
4. **Projects**: Featured projects including Sentry Bio startup
5. **CV**: Downloadable CV and career highlights
6. **Contact**: Contact information and professional profiles

## Setup Instructions

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/amitfenn/amitfenn.github.io.git
   cd amitfenn.github.io
   ```

2. Open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Customizing Content

#### Update Personal Information

Edit `index.html` to customize:
- Name and tagline in the hero section
- About text
- Research interests and publications
- Projects
- CV highlights
- Contact information and social links

#### Replace Placeholder CV

1. Save your CV as a PDF file
2. Replace `assets/CV.pdf` with your actual CV
3. Commit and push the changes

#### Update Favicon

Replace `assets/images/favicon.png` with your own favicon image (32x32px recommended).

#### Modify Styling

Edit `assets/css/style.css` to customize:
- Colors (modify CSS variables at the top of the file)
- Fonts
- Spacing
- Layout

#### Add Functionality

Edit `assets/js/script.js` to add or modify:
- Interactive features
- Animations
- Custom behaviors

### Deploying to GitHub Pages

1. **Create GitHub Repository**:
   ```bash
   # If not already created
   gh repo create amitfenn --public --source=. --remote=origin
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - The site will automatically deploy when you push to the main branch

4. **Access Your Site**:
   - Your site will be available at: `https://amitfenn.github.io`
   - Deployment typically takes 1-2 minutes

### Automatic Deployment

This site uses GitHub Actions for automatic deployment. Every push to the `main` branch triggers a new deployment.

The workflow file is located at `.github/workflows/deploy.yml`.

## Project Structure

```
.
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Styles and dark mode
│   ├── js/
│   │   └── script.js      # Interactive features
│   ├── images/
│   │   └── favicon.png    # Site favicon
│   └── CV.pdf             # Downloadable CV
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
└── README.md              # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern layouts with Grid and Flexbox
- **JavaScript**: Vanilla JS for interactions
- **GitHub Actions**: Automated deployment
- **GitHub Pages**: Free hosting

## Customization Tips

### Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --accent-primary: #2563eb;  /* Primary accent color */
    --accent-hover: #1d4ed8;    /* Hover state */
    /* ... other variables */
}
```

### Adding Sections

1. Add a new `<section>` in `index.html`
2. Add a navigation link in the navbar
3. Style it in `assets/css/style.css`
4. The smooth scrolling will work automatically

### Adding Analytics

To add Google Analytics or other tracking:

1. Add the tracking script before the closing `</head>` tag in `index.html`
2. Follow the analytics provider's setup instructions

## Performance

- **No external dependencies**: All code is self-contained
- **Optimized CSS**: Minimal, efficient stylesheets
- **Lazy loading**: Intersection Observer for fade-in animations
- **Fast deployment**: Static site with no build process

## License

This project is open source. Feel free to use it as a template for your own personal website.

## Contact

For questions or issues, please open an issue on GitHub or contact via the website.

---

Built with care by Dr. Amit Fenn
