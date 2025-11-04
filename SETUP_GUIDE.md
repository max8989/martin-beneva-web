# Martin Beneva - Booking Website Setup Guide

A modern, bilingual (French/English) one-page website with a booking form.

## Features

✅ **Bilingual Support** - Instant switching between French and English
✅ **Modern Design** - Clean, minimal, and professional layout
✅ **Mobile Responsive** - Optimized for all screen sizes
✅ **Form Validation** - Client-side validation with Zod
✅ **Database Integration** - Secure form submissions to Supabase
✅ **Success/Error States** - Clear feedback for users
✅ **Dark Mode Support** - Automatic dark mode based on system preferences

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Supabase** - Backend and database
- **React Hook Form** - Form management
- **Zod** - Schema validation

## Quick Start

### 1. Install Dependencies

Dependencies are already installed. If you need to reinstall:

```bash
yarn install
```

### 2. Set Up Supabase

1. Go to [https://supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to **Project Settings > API** and copy:
   - Project URL
   - Anon/Public key

4. Run the database schema from `DATABASE_SETUP.md`:
   - Go to your Supabase dashboard
   - Navigate to **Database > SQL Editor**
   - Copy and paste the SQL from `DATABASE_SETUP.md`
   - Click **Run**

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
```

### 4. Run the Development Server

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website!

## Customization

### Update Content

All website content is in `lib/content.ts`. Update the text for both English and French:

```typescript
export const content = {
  en: {
    heroTitle: 'Your English Title',
    // ... more content
  },
  fr: {
    heroTitle: 'Votre Titre Français',
    // ... more content
  }
};
```

### Modify Styling

- **Global styles**: `app/globals.css`
- **Component styles**: Tailwind classes in component files
- **Colors**: Update Tailwind classes throughout the components

### Add More Form Fields

1. Update the schema in `components/BookingForm.tsx`:
```typescript
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  company: z.string().optional(), // Add new field
});
```

2. Add the field to the database (see `DATABASE_SETUP.md`)
3. Add the input in the form JSX

## Project Structure

```
martin-beneva/
├── app/
│   ├── layout.tsx          # Root layout with LanguageProvider
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── BookingForm.tsx     # Form with validation & submission
│   └── LanguageContext.tsx # Language switching logic
├── lib/
│   ├── content.ts          # Bilingual content
│   └── supabase.ts         # Supabase client
├── DATABASE_SETUP.md       # Database schema instructions
├── SETUP_GUIDE.md          # This file
└── .env.local.example      # Environment variables template
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Deploy to Other Platforms

The app works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## Viewing Submitted Forms

1. Log in to your Supabase dashboard
2. Go to **Database > Tables**
3. Click on **appointment_requests**
4. View all submissions with timestamps

### Optional: Create an Admin Dashboard

You can create an admin page to view submissions:

```typescript
// app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const { data } = await supabase
        .from('appointment_requests')
        .select('*')
        .order('created_at', { ascending: false });

      setRequests(data || []);
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Appointment Requests</h1>
      <div className="space-y-4">
        {requests.map((req: any) => (
          <div key={req.id} className="border p-4 rounded">
            <p><strong>Name:</strong> {req.name}</p>
            <p><strong>Email:</strong> {req.email}</p>
            <p><strong>Phone:</strong> {req.phone}</p>
            <p><strong>Date:</strong> {new Date(req.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Troubleshooting

### Build Errors

If you see Supabase errors during build, make sure your `.env.local` file is properly configured.

### Form Submission Not Working

1. Check browser console for errors
2. Verify Supabase credentials in `.env.local`
3. Check that the database table exists
4. Verify Row Level Security policies are set correctly

### Language Toggle Not Working

The language state is managed in React context. Make sure:
- `LanguageProvider` wraps your app in `layout.tsx`
- You're using the `useLanguage` hook in client components

## Support

For issues or questions:
- Check the Next.js docs: https://nextjs.org/docs
- Check the Supabase docs: https://supabase.com/docs
- Review `DATABASE_SETUP.md` for database setup

## Next Steps

- [ ] Customize the content in `lib/content.ts`
- [ ] Set up Supabase and add your credentials
- [ ] Test the form submission
- [ ] Customize colors and styling
- [ ] Deploy to production
- [ ] Set up email notifications (optional)
- [ ] Add Google Analytics (optional)

---

Built with Next.js 16, TypeScript, and Tailwind CSS
