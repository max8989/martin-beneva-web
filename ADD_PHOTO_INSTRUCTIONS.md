# Adding Your Professional Photo

## Quick Steps

### 1. Save the Photo

Save your professional headshot to:
```
public/martin-gagne.jpg
```

**Important:**
- File must be named exactly: `martin-gagne.jpg`
- Location: `public/` folder (root of project)
- Format: JPG recommended
- Recommended size: 800x800px to 1200x1200px

### 2. Verify the File

Check that the file exists:
```bash
ls -la public/martin-gagne.jpg
```

Should show: `public/martin-gagne.jpg`

### 3. Test the Site

```bash
yarn dev
```

Visit http://localhost:3000/en and scroll to the "About" section.

## What to Expect

### Photo Display
- **Location**: About section (left side on desktop, top on mobile)
- **Style**: Rounded corners with purple gradient border
- **Name Badge**: "Martin Gagne" appears below the photo
- **Hover Effect**: Subtle glow intensifies on hover

### Layout
```
Desktop:
┌─────────────────────────────────┐
│  Photo  │  About Content        │
│         │  - Title              │
│         │  - Description        │
│         │  - Stats (inline)     │
└─────────────────────────────────┘

Mobile:
┌────────────┐
│   Photo    │
├────────────┤
│  Content   │
│  Stats     │
└────────────┘
```

## Troubleshooting

### Photo doesn't show
1. **Check filename**: Must be exactly `martin-gagne.jpg`
2. **Check location**: Must be in `public/` folder
3. **Clear cache**: Hard refresh (Ctrl+Shift+R)
4. **Check browser console**: Look for 404 errors

### Photo looks stretched
- Use a square image (same width and height)
- Recommended: 1000x1000px
- Format: JPG or PNG

### Photo quality is poor
- Use higher resolution (at least 800x800px)
- Compress if file size is too large (use TinyPNG)

## Alternative: Using a Different Name

If you want to use a different filename:

**1. Update the image path in `app/[lang]/page.tsx`:**

Find line ~83:
```tsx
src="/martin-gagne.jpg"
```

Change to:
```tsx
src="/your-filename.jpg"
```

**2. Save your photo as:**
```
public/your-filename.jpg
```

## Image Specifications

### Recommended
- **Format**: JPG (smaller file size)
- **Dimensions**: 1000x1000px (square)
- **File size**: < 500KB
- **Quality**: 80-90%

### Accepted
- **Formats**: JPG, PNG, WebP
- **Dimensions**: Minimum 600x600px
- **Max file size**: 2MB

## Optimization Tips

### Compress the Image
Use online tools:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

### Ideal Settings
- Resolution: 1000x1000px
- Quality: 85%
- Format: Progressive JPG

## Testing Checklist

After adding the photo:

- [ ] Photo displays in About section
- [ ] Name badge shows "Martin Gagne"
- [ ] Photo has purple gradient border
- [ ] Hover effect works (glow intensifies)
- [ ] Mobile view looks good
- [ ] Dark mode displays correctly
- [ ] No console errors (404, etc.)

## Current Changes Made

✅ Photo section added to About
✅ Name updated to "Martin Gagne" throughout site
✅ Page title updated
✅ Footer updated
✅ Stats repositioned next to description

---

Once you save the photo, your professional image will be live on the site! 📸
