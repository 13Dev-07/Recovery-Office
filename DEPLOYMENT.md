# Recovery Office Website - Deployment Guide

This document outlines the process for deploying the Recovery Office website, designed with sacred geometry principles for optimal harmony and user experience.

## 🔮 Deployment Options

We offer multiple deployment paths aligned with the golden ratio principle of balance:

### Option 1: Simplified Deployment (Recommended)

The simplified deployment process uses our custom script that incorporates sacred geometry principles:

```bash
npm run deploy:simple
```

This will:
1. Run pre-deployment checks based on Fibonacci sequence principles
2. Build the production application with golden ratio optimizations
3. Calculate a Sacred Harmony Score for your build
4. Provide clear next steps for uploading to your hosting provider

### Option 2: Standard Deployment

For those preferring the standard deployment process:

```bash
npm run deploy
```

This will run pre-deployment checks and build the production version of the site.

## 📐 Recommended Hosting Providers

The following hosting providers align well with our sacred geometry principles:

1. **Vercel** - Offers edge deployment at phi points around the globe
2. **Netlify** - Provides golden ratio-aligned CDN distribution
3. **AWS S3 + CloudFront** - Allows for Fibonacci-sequenced cache invalidation

## 🌿 Manual Deployment Steps

If you prefer to deploy manually, follow these steps:

1. Build the production version:
   ```bash
   npm run build:production
   ```

2. Verify the build directory contains all required files:
   ```
   build/
   ├── index.html
   ├── static/
   │   ├── css/
   │   ├── js/
   │   ├── media/
   │   └── ...
   ├── favicon.ico
   ├── logo192.png
   ├── logo512.png
   ├── manifest.json
   └── robots.txt
   ```

3. Upload the entire `build` directory to your web server or hosting provider
4. Ensure your server is configured to:
   - Serve `index.html` for all routes (SPA configuration)
   - Use appropriate cache headers (Fibonacci-based durations recommended)
   - Enable HTTPS for secure connections

## 🔥 Deployment Checklist

Before finalizing deployment, verify these key elements:

- [ ] Production environment variables are correctly set in `.env.production`
- [ ] Golden ratio spacing (1.618) is preserved in the built CSS
- [ ] All API endpoints point to production servers
- [ ] Regulatory badges display correctly
- [ ] Lighthouse performance score exceeds φ × 61.8 (≈ 100)
- [ ] Accessibility features are fully functional

## ⚠️ Troubleshooting

### Sacred Geometry Error Codes

Our sacred error analysis follows Fibonacci patterns:

| Error Code | Meaning | Solution |
|------------|---------|----------|
| φ-1        | Golden ratio CSS variables missing | Check your CSS custom properties |
| φ-2        | Fibonacci spacing inconsistency | Verify your spacing system follows 8, 13, 21... |
| φ-3        | Sacred symbol rendering issue | Check SVG viewBox proportions |
| φ-5        | Regulatory badges misalignment | Ensure badges are positioned at 61.8% points |
| φ-8        | Performance below sacred threshold | Run `npm run audit:performance` |

### Common Issues

1. **Blank screen after deployment**
   - Check that your server is configured to handle client-side routing
   - Ensure `index.html` is served for all routes

2. **Missing assets**
   - Verify all files from the `build` directory were uploaded
   - Check file permissions on your server

3. **API connectivity issues**
   - Confirm CORS settings on your API server
   - Verify environment variables are correctly set

## 🌟 Post-Deployment

After successful deployment:

1. Run a sacred harmony audit:
   ```bash
   npm run audit:core-vitals --url=https://your-deployed-site.com
   ```

2. Validate your deployment with our sacred geometry validator:
   ```bash
   npm run audit:accessibility:prod --url=https://your-deployed-site.com
   ```

3. Document your Sacred Harmony Score for future reference

---

*May your deployment manifest with perfect golden ratio harmony.* 