# Mohammad Hassan - Portfolio Website

## Professional Data Analyst Portfolio

A clean, corporate-style portfolio website designed for a Business-Oriented Data Analyst with enterprise experience. The design follows Big 4 consulting aesthetics with a focus on clarity, measurable impact, and professional presentation.

## Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Corporate Styling**: Clean, minimal design with professional color palette (dark blue, white, grey)
- **Section Structure**:
  - Hero with clear value proposition
  - About section highlighting enterprise experience
  - Core Expertise with categorized skills
  - Professional Experience with Business Problem → Strategy → Impact format
  - Projects showcasing data analytics work
  - Quantified Metrics & Impact
  - Education & Certifications
  - Contact information

## Customization Guide

### Update Personal Information

1. **Email Address**: Replace `mohammad.hassan@example.com` in the Contact section
2. **LinkedIn URL**: Update the LinkedIn profile link in the Contact section
3. **GitHub URL**: Update the GitHub profile link in the Contact section

### Modify Content

- **Hero Section**: Edit lines 27-35 in `index.html`
- **About Text**: Edit lines 43-55 in `index.html`
- **Experience Details**: Edit lines 139-232 in `index.html`
- **Project Details**: Edit lines 242-370 in `index.html`
- **Metrics**: Edit lines 380-425 in `index.html`

### Customize Colors

Edit the CSS variables in `styles.css` (lines 10-17):

```css
--primary-color: #1a3a52;     /* Main dark blue */
--secondary-color: #2c5f7f;   /* Secondary blue */
--accent-color: #3b7ca6;      /* Accent blue */
```

### Add Resume Download

To enable resume download:

1. Add your resume PDF to the portfolio folder
2. Update the "Download Resume" button href in `index.html` line 32:
   ```html
   <a href="resume.pdf" download class="btn btn-secondary">Download Resume</a>
   ```

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript for smooth scrolling
└── README.md       # This file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Responsive Design (Mobile-first approach)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push these files to the repository
3. Go to Settings → Pages
4. Select the main branch as source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop the portfolio folder to Netlify
2. Your site will be live instantly

### Custom Domain

Update the domain settings in your hosting provider's dashboard.

## Contact

For questions or customization assistance, reach out via the contact information provided on the website.

---

© 2026 Mohammad Hassan. All rights reserved.
