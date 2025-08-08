# Deployment Guide for GitHub Pages

## Automatic Deployment (Recommended)

1. **Push to GitHub**: Commit and push your changes to the main branch
2. **GitHub Settings**: Go to your repository → Settings → Pages
3. **Source**: Select "GitHub Actions" as the source
4. **Domain**: Add custom domain `longbyte.in` if you have one
5. **Wait**: The GitHub Action will automatically build and deploy

## Manual Deployment

If you prefer manual deployment:

```bash
# Build for production
npm run build:pages

# Deploy to gh-pages branch
npx gh-pages -d dist
```

## Custom Domain Setup

1. Add `CNAME` file in `public/` folder with your domain
2. Configure DNS records:
   - Type: CNAME
   - Name: @ (or www)
   - Value: username.github.io

## Troubleshooting

### Common Issues:
1. **404 on refresh**: Enable custom domain or use hash routing
2. **Assets not loading**: Check base path in vite.config.ts
3. **Build fails**: Ensure all dependencies are installed

### Key Files:
- `vite.config.ts`: Base path configuration
- `.github/workflows/deploy.yml`: GitHub Actions workflow
- `public/.nojekyll`: Prevents Jekyll processing
- `package.json`: Build scripts

### URLs:
- Development: http://localhost:8080
- GitHub Pages: https://username.github.io/longbyte-web/
- Custom Domain: https://longbyte.in (if configured)
