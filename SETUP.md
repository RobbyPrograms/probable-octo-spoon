# Setup Guide 🚀

## Quick Start (100% Free!)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app!

---

## Free Tier Services Setup

### Database: Supabase (Free Tier)
1. Go to [supabase.com](https://supabase.com)
2. Create a free account
3. Create a new project
4. Get your connection string from Settings > Database
5. Add to `.env`:
   ```
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   NEXT_PUBLIC_SUPABASE_URL=https://[PROJECT-REF].supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]
   ```

**Free Tier Limits:**
- 500MB database
- 2GB bandwidth
- Unlimited API requests

### Redis: Upstash (Free Tier)
1. Go to [upstash.com](https://upstash.com)
2. Create a free account
3. Create a Redis database
4. Add to `.env`:
   ```
   UPSTASH_REDIS_REST_URL=[YOUR-REDIS-URL]
   UPSTASH_REDIS_REST_TOKEN=[YOUR-REDIS-TOKEN]
   ```

**Free Tier Limits:**
- 10,000 commands per day
- 256MB storage

### Authentication: NextAuth.js (Free)
1. Generate a secret:
   ```bash
   openssl rand -base64 32
   ```
2. Add to `.env`:
   ```
   NEXTAUTH_SECRET=[GENERATED-SECRET]
   NEXTAUTH_URL=http://localhost:3000
   ```

### GitHub OAuth (Free)
1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. Add to `.env`:
   ```
   GITHUB_CLIENT_ID=[YOUR-CLIENT-ID]
   GITHUB_CLIENT_SECRET=[YOUR-CLIENT-SECRET]
   ```

### Hosting: Vercel (Free Tier)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Add environment variables in Vercel dashboard
5. Deploy!

**Free Tier Limits:**
- 100GB bandwidth/month
- Unlimited deployments
- Custom domain support

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=your-supabase-connection-string
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Auth
NEXTAUTH_SECRET=your-generated-secret
NEXTAUTH_URL=http://localhost:3000

# GitHub
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Redis
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

---

## Project Structure

```
devconnect/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── (auth)/            # Auth routes
│   ├── (dashboard)/       # Dashboard routes
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript types
├── public/                # Static assets
└── prisma/                # Database schema (if using Prisma)
```

---

## Next Steps

1. ✅ Project setup (DONE)
2. ⏭️ Set up database schema
3. ⏭️ Implement authentication
4. ⏭️ Build user profiles
5. ⏭️ Create feed system

---

## Cost Breakdown

**Current Cost: $0/month**

- Supabase: Free (500MB DB, 2GB bandwidth)
- Upstash: Free (10K commands/day)
- Vercel: Free (100GB bandwidth/month)
- GitHub: Free (unlimited repos)
- All libraries: Free (open source)

**Future Costs (when scaling):**
- Domain: ~$12/year (optional)
- Stripe fees: 2.9% + $0.30 per transaction (only when processing payments)
- CodeSandbox API: Only if we use it (can use Docker instead for free)

---

## Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Database connection issues?
- Check your Supabase project is active
- Verify connection string format
- Check firewall settings

### Build errors?
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

**Happy coding! 🚀**
