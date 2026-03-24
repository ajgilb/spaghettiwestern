# Spaghetti Western Restaurant & Bar

Coming-soon website for **Spaghetti Western**, a neighborhood Italian restaurant and full bar opening in Old Town Newhall, CA.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fajgilb%2Fspaghettiwestern)

1. Connect the GitHub repository to a Vercel project.
2. Vercel will auto-detect Next.js and apply the settings in `vercel.json`.
3. Every push to `main` triggers a new production deployment.

## Email sign-ups

Form submissions are sent to `POST /api/signup`.  
Update `src/app/api/signup/route.js` to forward data to your email service, CRM, or database.
