This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Last.fm Integration

This portfolio displays your currently playing or recently played track from Last.fm.

### Setup

1. **Get a Last.fm API key:**
   - Go to [Last.fm API](https://www.last.fm/api/account/create)
   - Create an API account (give it a name like "Portfolio")
   - Copy your API key

2. **Configure environment variables:**
   
   Add these to your `.env.local` file:
   ```
   LASTFM_API_KEY=your_lastfm_api_key
   LASTFM_USERNAME=your_lastfm_username
   ```

   Or set them in your Vercel project settings under Environment Variables.

3. **Restart the development server** if it was running.

### How it works

- The widget fetches your most recently played track from Last.fm every 60 seconds
- It shows a pulsing indicator when a track is currently playing
- You can manually refresh by clicking the refresh button
- Album art, track name, artist, and album are displayed
