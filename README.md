# metta-exports-no-base

This project is a Cloudflare-ready version of the Metta Exports site with Base44 integration removed.

## Run locally

1. Clone the repository using the project's Git URL.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

4. Start the dev server:

```bash
npm run dev
```

5. Open the local URL shown by Vite.

## Build for production

```bash
npm run build
```

The static output is generated in `dist/`.

## Deploy to Cloudflare Pages

- Set the build command to `npm run build`
- Set the publish directory to `dist`
- Set the root directory to the repository root

## Notes

- This version no longer depends on Base44 app proxy settings.
- The Cloudflare deployment is a static site build from Vite.
