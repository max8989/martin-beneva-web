# Quick Reference Card

Quick answers to common tasks. Bookmark this page!

## 🚀 Commands

```bash
# Development
yarn dev              # Start dev server (http://localhost:3000)
yarn build            # Build for production
yarn start            # Run production build locally

# Dependencies
yarn install          # Install all dependencies
yarn add [package]    # Add a new package
```

## 📝 Where to Edit What

| What to Change | File to Edit |
|---|---|
| Website text (EN/FR) | `lib/content.ts` |
| Page layout/sections | `app/page.tsx` |
| Form fields | `components/BookingForm.tsx` |
| Page title/SEO | `app/layout.tsx` |
| Global styles | `app/globals.css` |
| Database schema | Run SQL in Supabase dashboard |
| Environment variables | `.env.local` |

## 🎨 Common Customizations

### Change Colors

Find and replace Tailwind classes:

```
Current: bg-gray-900 dark:bg-white
Change to: bg-blue-600 dark:bg-blue-500
```

### Add a Form Field

1. Update schema in `components/BookingForm.tsx`:
   ```typescript
   const schema = z.object({
     // ... existing fields
     company: z.string().optional(),
   });
   ```

2. Add input field in the same file (copy existing field as template)

3. Update database table in Supabase:
   ```sql
   ALTER TABLE appointment_requests
   ADD COLUMN company TEXT;
   ```

### Change Language

All content is in `lib/content.ts`:

```typescript
export const content = {
  en: { /* English content */ },
  fr: { /* French content */ }
};
```

## 🗄️ Supabase Quick Commands

### View Submissions
1. Go to Supabase dashboard
2. Database → Tables
3. Click `appointment_requests`

### Export Data
1. Click table name
2. Click "Download as CSV"

### Delete Test Data
```sql
DELETE FROM appointment_requests
WHERE email LIKE '%test%';
```

## 🐛 Troubleshooting

### Form doesn't submit
1. Check browser console (F12)
2. Verify `.env.local` exists with correct values
3. Test Supabase connection in dashboard

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
yarn build
```

### Content doesn't update
1. Stop dev server (Ctrl+C)
2. Restart: `yarn dev`
3. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

### TypeScript errors
```bash
# Check what the error is
yarn build

# Common fix: missing types
yarn add -D @types/[package-name]
```

## 🌐 Environment Variables

Required in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxx...
```

Get these from: Supabase Dashboard → Settings → API

## 📱 Testing

### Test Locally
```bash
yarn dev
# Open http://localhost:3000
```

### Test Production Build
```bash
yarn build
yarn start
# Open http://localhost:3000
```

### Test on Mobile
1. Start dev server
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Visit `http://[YOUR_IP]:3000` on phone

## 🚀 Deployment Quick Guide

### Vercel
```bash
# One-time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main

# Then: Import in Vercel dashboard
# Add environment variables
# Deploy
```

### Update Live Site
```bash
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys!
```

## 📊 Database Schema

```sql
appointment_requests (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL
)
```

## 🎯 File Structure at a Glance

```
martin-beneva/
├── app/
│   ├── layout.tsx       ← Meta tags, layout
│   ├── page.tsx         ← Main page
│   └── globals.css      ← Global styles
├── components/
│   ├── BookingForm.tsx  ← Form logic
│   └── LanguageContext.tsx ← Language state
├── lib/
│   ├── content.ts       ← 📝 EDIT THIS FIRST!
│   └── supabase.ts      ← DB connection
└── .env.local           ← API keys (create this)
```

## ⚡ Pro Tips

1. **Edit content first** - Change `lib/content.ts` before anything else
2. **Test form** - Always test a submission after changes
3. **Commit often** - Use git to save your progress
4. **Mobile first** - Test on mobile, not just desktop
5. **Keep .env.local secret** - Never commit it to git!

## 🔗 Important Links

- **Local Dev:** http://localhost:3000
- **Supabase:** https://app.supabase.com
- **Vercel:** https://vercel.com
- **Next.js Docs:** https://nextjs.org/docs

## 📞 Getting Started Checklist

- [ ] Edit `lib/content.ts` with your info
- [ ] Create Supabase account
- [ ] Run SQL from `DATABASE_SETUP.md`
- [ ] Create `.env.local` with credentials
- [ ] Test locally with `yarn dev`
- [ ] Submit test form
- [ ] Check Supabase for test submission
- [ ] Deploy to Vercel
- [ ] Test live site
- [ ] Share your link! 🎉

---

**Need more detail?** Check the full guides:
- [NEXT_STEPS.md](./NEXT_STEPS.md) - What to do next
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Complete setup
- [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Content tips
