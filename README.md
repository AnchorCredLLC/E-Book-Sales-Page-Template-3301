# E-Book Sales Page Template

A beautiful, mobile-first e-book sales page template ready for ThemeForest. Built with pure HTML, CSS, and JavaScript with Stripe and Mailchimp integration.

## 🚀 Features

- **Mobile-First Design**: Optimized for all devices
- **Stripe Integration**: Ready for payments
- **Mailchimp Integration**: Newsletter signup
- **Smooth Animations**: Premium feel with micro-interactions
- **FAQ Accordion**: Interactive frequently asked questions
- **Responsive Layout**: Beautiful on all screen sizes
- **Fast Loading**: Optimized performance
- **SEO Friendly**: Proper meta tags and structure

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Customization Guide

### 1. Book Information
Replace the following placeholders in `index.html`:

- `[BOOK TITLE]` - Your book title
- Book cover image URL: `https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop`
- Author name: `John Author`
- Author photo URL: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face`

### 2. Stripe Configuration
In `index.html`, update the buy button attributes:

```html
<button id="buy-btn" data-public-key="pk_test_XXX" data-price-id="price_XXX">
```

Replace:
- `pk_test_XXX` with your Stripe publishable key
- `price_XXX` with your Stripe price ID

### 3. Mailchimp Integration
In `index.html`, find the newsletter form:

```html
<form action="https://YOUR-MAILCHIMP-URL" method="post" id="mc-form">
```

Replace `YOUR-MAILCHIMP-URL` with your actual Mailchimp form action URL.

### 4. Color Customization
Edit CSS variables in `styles.css`:

```css
:root {
  --primary: #2A9D8F;     /* Primary brand color */
  --secondary: #E9C46A;   /* Secondary accent color */
  --accent: #F4A261;      /* Additional accent */
  --dark: #264653;        /* Dark text/backgrounds */
  --light: #E76F51;       /* Light accent */
}
```

### 5. Content Customization

#### Hero Section
- Update the hero title and subtitle
- Replace the book cover image
- Modify the price in the buy button

#### Benefits Section
- Edit the three benefit cards
- Replace icons if needed
- Update titles and descriptions

#### Author Bio
- Replace author information
- Update social media links
- Change author photo

#### FAQ Section
- Add/remove/edit questions and answers
- Modify the accordion content

### 6. Success/Cancel URLs
The Stripe integration redirects to:
- Success: `your-domain.com?success=true`
- Cancel: `your-domain.com?canceled=true`

Update these URLs in `script.js` if needed.

## 🚀 Deployment

This template works with any static hosting service:

### Netlify
1. Drag and drop the files to Netlify
2. Your site is live!

### GitHub Pages
1. Create a new repository
2. Upload files
3. Enable GitHub Pages in settings

### Vercel
1. Import your repository
2. Deploy automatically

### Amazon S3
1. Create an S3 bucket
2. Enable static website hosting
3. Upload files

## 📱 Mobile Optimization

- Touch-friendly buttons (minimum 48px height)
- Responsive typography
- Mobile-first CSS approach
- Optimized images
- Fast loading animations

## 🎨 Design Features

- **Premium Animations**: Smooth transitions and hover effects
- **Modern Typography**: Inter font family
- **Accessible Colors**: High contrast ratios
- **Professional Layout**: Clean, modern design
- **Visual Hierarchy**: Clear content structure

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📊 Performance

- Optimized images
- Minimal JavaScript
- Efficient CSS
- Fast loading times
- Smooth animations

## 🤝 Support

For customization help or questions:
1. Check the code comments
2. Review this README
3. Test thoroughly before going live

## 📄 License

This template is ready for commercial use and ThemeForest submission.

---

**Ready to sell your e-book?** Just customize the content and deploy! 🚀