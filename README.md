# Martin Beneva - Professional Booking Website

A modern, bilingual (French/English) one-page website with an integrated booking form.

## Features

- 🌍 **Bilingual** - Instant switching between French and English
- 📱 **Mobile-First** - Fully responsive design
- 🎨 **Modern UI** - Clean, minimal, professional aesthetic
- ✅ **Form Validation** - Real-time validation with helpful error messages
- 💾 **Supabase Integration** - Secure form submissions to database
- 🌙 **Dark Mode** - Automatic dark mode support
- ⚡ **Fast & Optimized** - Built with Next.js 16 and Tailwind CSS 4

## Quick Start

### 1. Install Dependencies
```bash
yarn install
```

### 2. Set Up Supabase
Follow the instructions in [`DATABASE_SETUP.md`](./DATABASE_SETUP.md)

### 3. Configure Environment
```bash
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials
```

### 4. Run Development Server
```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup instructions
- **[DATABASE_SETUP.md](./DATABASE_SETUP.md)** - Database configuration
- **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** - How to customize your content

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- React Hook Form
- Zod validation
- Supabase

## Customization

All content is in `lib/content.ts`. Update the text for both languages:

```typescript
export const content = {
  en: {
    heroTitle: 'Your Title Here',
    // ... more content
  },
  fr: {
    heroTitle: 'Votre Titre Ici',
    // ... more content
  }
};
```

See [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) for detailed customization instructions.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

Also works on Netlify, Railway, AWS Amplify, and Cloudflare Pages.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── BookingForm.tsx     # Form component
│   └── LanguageContext.tsx # Language state
├── lib/
│   ├── content.ts          # Bilingual content
│   └── supabase.ts         # Database client
└── [docs]                  # Setup guides
```

## License

Built for Martin Beneva. All rights reserved.
