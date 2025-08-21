# Astro × Vercel Image Optimization Repro

This minimal project reproduces a bug where the inner `url` parameter for Vercel's optimizer
drops the encoded leading slash when the source is an ESM ImageMetadata object.

## Run locally
```bash
npm i
npm run build
npm run preview
```

## Deploy to Vercel
- Push this repo to GitHub and import it in Vercel, or use the Vercel CLI.
- Visit `/repro` and check DevTools → Network:
  - Case A (ESM ImageMetadata): `/_vercel/image?url=_astro%2F...` → 400 (bug)
  - Case B (string path):      `/_vercel/image?url=%2F_astro%2F...` → 200 (ok)
```

