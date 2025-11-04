# URL-Based Language Routing

## Overview

The website now uses URL-based language routing with clean paths:
- **English**: `https://yoursite.com/en`
- **French**: `https://yoursite.com/fr`

## Features

### 🌐 Clean URLs
- `/en` for English content
- `/fr` for French content
- Root `/` automatically redirects to `/en`

### 🔗 Shareable Links
- Each language has its own unique URL
- Share French version: send `/fr` link
- Share English version: send `/en` link
- Links work correctly when shared

### 📱 Browser Back Button
- Language changes are part of browser history
- Back button works to return to previous language
- Forward/backward navigation fully supported

### 🔄 SEO Friendly
- Search engines can index each language separately
- Proper `hreflang` support (can be added)
- Better for international SEO

## How It Works

### File Structure
```
app/
├── layout.tsx          # Root layout (unchanged)
├── globals.css         # Global styles
└── [lang]/            # Dynamic language route
    ├── layout.tsx      # Language-specific layout
    └── page.tsx        # Main page (moved here)
```

### Routing Logic

**1. Proxy (proxy.ts)**
- Intercepts all requests
- Checks if URL has `/en` or `/fr`
- Redirects root `/` → `/en`
- Allows static files through

**2. Dynamic Route ([lang])**
- Catches `/en` and `/fr` paths
- Generates static pages for both languages
- Passes language to components

**3. Language Context**
- Reads language from URL pathname
- Updates when URL changes
- Provides translations based on URL

### Language Toggle Behavior

**Before:**
```javascript
// Just changed React state
setLanguage('fr')
```

**Now:**
```javascript
// Changes URL, which updates everything
router.push('/fr')
```

## Implementation Details

### Files Created/Modified

**Created:**
1. `app/[lang]/layout.tsx` - Dynamic route layout
2. `proxy.ts` - Request interceptor (formerly middleware)

**Modified:**
1. `app/[lang]/page.tsx` - Moved from `app/page.tsx`
2. `components/LanguageContext.tsx` - Reads from URL
3. Language toggle - Uses `router.push()`

### URL Format

```
Base URL: https://yoursite.com

English:
- Full: https://yoursite.com/en
- Path: /en

French:
- Full: https://yoursite.com/fr
- Path: /fr

Root redirect:
- Input: https://yoursite.com/
- Output: https://yoursite.com/en (automatic redirect)
```

## User Experience

### First Visit
1. User visits `yoursite.com`
2. Automatically redirected to `yoursite.com/en`
3. See English content

### Switching Language
1. Click language toggle (EN/FR)
2. URL changes: `/en` → `/fr`
3. Page content updates
4. New URL is in browser history

### Direct Access
1. User visits `yoursite.com/fr` directly
2. Immediately see French content
3. No redirect needed

### Sharing
1. User on French version (`/fr`)
2. Copies URL and shares
3. Recipient sees French version
4. No confusion about language

## Technical Benefits

### Static Generation
Both language versions are pre-generated at build time:
```
Route (app)
└ ● /[lang]
  ├ /en    # Pre-rendered
  └ /fr    # Pre-rendered
```

### Performance
- Both pages are static HTML
- No client-side language detection needed
- Fast initial page load
- SEO optimized

### Maintainability
- Clear URL structure
- Easy to add more languages
- Standard Next.js patterns

## Adding More Languages

To add Spanish (`/es`):

**1. Update content.ts:**
```typescript
export const content = {
  en: { /* ... */ },
  fr: { /* ... */ },
  es: { /* Spanish translations */ },
};

export type Language = 'en' | 'fr' | 'es';
```

**2. Update proxy.ts:**
```typescript
const locales = ['en', 'fr', 'es'];
```

**3. Update [lang]/layout.tsx:**
```typescript
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
    { lang: 'es' },
  ];
}
```

**4. Update language toggle** (add ES option)

## Testing

### Test URL Routing
```bash
yarn dev
```

1. Visit `http://localhost:3000`
   - Should redirect to `http://localhost:3000/en`

2. Visit `http://localhost:3000/fr`
   - Should show French content immediately

3. Click language toggle
   - Should change URL and content

4. Use browser back button
   - Should return to previous language

### Test Build
```bash
yarn build
```

Should see:
```
Route (app)
└ ● /[lang]
  ├ /en
  └ /fr
```

## SEO Enhancements (Future)

### Add hreflang tags
In `app/[lang]/layout.tsx`:

```typescript
export async function generateMetadata({ params }: { params: { lang: Language } }) {
  return {
    alternates: {
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
  };
}
```

### Sitemap
Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    { url: 'https://yoursite.com/en', ... },
    { url: 'https://yoursite.com/fr', ... },
  ];
}
```

## Migration Notes

### What Changed
- URLs now include `/en` or `/fr`
- Old bookmarks to `/` redirect to `/en`
- Language persists in URL, not localStorage
- Browser history tracks language changes

### Backward Compatibility
- Root `/` still works (redirects to `/en`)
- No broken links
- Smooth upgrade path

## Browser Compatibility

✅ All modern browsers support:
- URL routing
- Browser history API
- Dynamic imports

## Analytics

Track language usage:
```javascript
// Google Analytics example
gtag('event', 'page_view', {
  page_path: window.location.pathname, // /en or /fr
  page_language: language
});
```

## Common Issues

### Issue: Infinite redirect loop

**Check:**
- Proxy matcher isn't excluding necessary paths
- Static files aren't being caught

**Fix:**
Already handled in proxy.ts:
```typescript
if (
  pathname.startsWith('/_next') ||
  pathname.startsWith('/api') ||
  pathname.includes('.')
) {
  return NextResponse.next();
}
```

### Issue: Language doesn't change

**Debug:**
1. Check URL actually changes
2. Check LanguageContext reads URL
3. Look for console errors

## Summary

### Before (State-based)
```
URL: yoursite.com (always the same)
Language: Stored in React state
Sharing: Always English
SEO: Single URL for both languages
```

### After (URL-based)
```
URL: yoursite.com/en or yoursite.com/fr
Language: Determined by URL
Sharing: Language-specific links
SEO: Separate URLs, better indexing
```

---

Your website now has proper URL-based internationalization! 🌍
