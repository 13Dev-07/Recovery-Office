# Deployment Guide for Recovery Office

This guide provides step-by-step instructions for deploying the Recovery Office website to production.

## Prerequisites

- Node.js (v16+)
- npm
- Netlify CLI (optional for direct deployments)

## Building for Production

There are several ways to build the project depending on your needs:

### Standard Build

```bash
npm run build
```

This will create a production build with TypeScript checking enabled.

### Quick Build (Skip TypeScript Checks)

```bash
npm run build:quick
```

This will create a production build while ignoring TypeScript errors.

### Netlify-Optimized Build

```bash
npm run deploy:netlify
```

This will create a production build optimized for Netlify deployment, with TypeScript checking disabled.

## Deployment Options

### 1. Deploy to Netlify (Recommended)

#### Option A: Using Netlify CLI

1. Install Netlify CLI if you don't have it already:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run deploy:netlify
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy --prod --dir=build
   ```

#### Option B: Using Netlify's Git Integration

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy using the settings in `netlify.toml`

### 2. Deploy to Other Hosting Services

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `build` directory to your hosting service.

## Handling TypeScript Issues

The project currently has TypeScript errors that need to be addressed. For deployment, we've included scripts that allow building despite these errors.

To fix TypeScript issues systematically, refer to the [TypeScript Error Fixing Plan](./TYPESCRIPT_ERROR_FIXING_PLAN.md).

## Troubleshooting

### Path Alias Issues

If you encounter errors with `@utils` imports, use the deployment scripts which automatically fix these issues:

```bash
npm run deploy
```

or 

```bash
npm run deploy:netlify
```

### Environment Variables

Make sure the following environment variables are set for deployment:

- `SKIP_TYPESCRIPT_CHECK=true`
- `TSC_COMPILE_ON_ERROR=true`
- `CI=false`
- `DISABLE_ESLINT_PLUGIN=true`

These are already configured in the deployment scripts and `netlify.toml`.

## Post-Deployment

After deployment, verify the following:

1. Check that all pages load correctly
2. Verify all assets (images, fonts) load properly
3. Test the form submissions and API integrations
4. Confirm responsive design on different devices
5. Run Lighthouse tests for performance, accessibility, SEO, and best practices 