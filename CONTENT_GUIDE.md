# Content Customization Guide

This guide shows you exactly what to change to personalize your website.

## Quick Customization Checklist

### 1. Personal Information

**File:** `lib/content.ts`

Replace the placeholder text with your actual information:

#### English Content
```typescript
en: {
  // Hero Section - First thing visitors see
  heroTitle: 'Transform Your Business with Expert Guidance',
  heroSubtitle: 'Professional consulting services tailored to your needs',

  // About Section - Tell your story
  aboutTitle: 'About Me',
  aboutDescription: `I'm a dedicated business consultant...`, // Your intro
  aboutDescription2: `Whether you're looking to...`, // Your value proposition

  // Services - What you offer
  services: [
    {
      title: 'Strategic Planning',
      description: 'Develop clear roadmaps...'
    },
    // Add or modify services
  ],
}
```

#### French Content
```typescript
fr: {
  // Translate all the English content to French
  heroTitle: 'Transformez Votre Entreprise...',
  // ... same structure as English
}
```

### 2. Metadata (SEO)

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Service",
  description: "Your compelling description here",
};
```

### 3. Add/Remove Services

**File:** `lib/content.ts`

In both `en` and `fr` sections:

```typescript
services: [
  {
    title: 'Service Name',
    description: 'Brief description of what you offer'
  },
  {
    title: 'Another Service',
    description: 'Another brief description'
  },
  // Add as many as you want - the layout adjusts automatically
]
```

## Content Sections Explained

### Hero Section
- **Purpose:** First impression, main headline
- **Best Practice:** Keep it short (5-10 words), benefit-focused
- **Example:** "Transform Your Business with Expert Guidance"

### About Section
- **Purpose:** Build trust, explain who you are
- **Best Practice:** 2-3 paragraphs, focus on experience and value
- **Tip:** Use "I" language to make it personal

### Services Section
- **Purpose:** Show what you offer
- **Best Practice:** 3-6 services, short titles, clear descriptions
- **Tip:** Focus on benefits, not just features

### CTA (Call to Action)
- **Purpose:** Encourage booking
- **Best Practice:** Clear, action-oriented
- **Example:** "Ready to Get Started?"

### Form Section
- **Purpose:** Collect contact information
- **Current Fields:** Name, Email, Phone
- **Expandable:** You can add more fields if needed

## Writing Tips

### For Hero Title
✅ Good: "Transform Your Business with Expert Guidance"
✅ Good: "Strategic Consulting for Growing Companies"
❌ Avoid: "Welcome to My Website"
❌ Avoid: "John Doe Consulting Services Inc."

### For Service Descriptions
✅ Good: "Streamline operations for maximum efficiency"
✅ Good: "Scale your business with confidence and clarity"
❌ Avoid: "I do consulting" (too vague)
❌ Avoid: "The best service ever" (too salesy)

### For About Section
✅ Good: Specific achievements, years of experience, types of clients
✅ Good: Your unique approach or methodology
❌ Avoid: Generic statements everyone could say
❌ Avoid: Overly technical jargon

## Tone Guidelines

### English
- Professional but approachable
- Clear and direct
- Benefits-focused
- Active voice

### French
- Professional with warmth ("vous" form recommended)
- Clear and precise
- Value-focused
- Natural translation (not literal)

## Example Full Customization

Here's an example for a financial advisor:

```typescript
en: {
  heroTitle: 'Secure Your Financial Future',
  heroSubtitle: 'Expert financial planning tailored to your goals',

  aboutTitle: 'Your Trusted Financial Partner',
  aboutDescription: `With over 15 years of experience in wealth management,
    I help individuals and families build and protect their financial future.
    My approach combines comprehensive planning with personalized service.`,
  aboutDescription2: `Whether you're planning for retirement, saving for
    education, or growing your investments, I'm here to guide you every step
    of the way.`,

  servicesTitle: 'How I Can Help',
  services: [
    {
      title: 'Retirement Planning',
      description: 'Build a secure retirement with confidence'
    },
    {
      title: 'Investment Management',
      description: 'Grow your wealth with smart strategies'
    },
    {
      title: 'Estate Planning',
      description: 'Protect your legacy for future generations'
    }
  ],

  ctaTitle: 'Let\'s Plan Your Future',
  ctaSubtitle: 'Schedule a free consultation to discuss your financial goals',
}
```

## Testing Your Content

After updating content:

1. Run `yarn dev`
2. Open http://localhost:3000
3. Check both English and French versions
4. Test on mobile (resize browser or use DevTools)
5. Make sure all text is readable and makes sense

## Common Mistakes to Avoid

❌ **Too much text** - Keep it concise
❌ **Inconsistent tone** - Maintain same voice throughout
❌ **Missing translations** - Update both EN and FR
❌ **Typos** - Always proofread
❌ **Generic content** - Be specific about your unique value

## Need Help?

If you need to:
- **Add more sections**: Modify `app/page.tsx`
- **Change form fields**: Edit `components/BookingForm.tsx`
- **Update styling**: Use Tailwind classes in components
- **Add more languages**: Extend the `content` object in `lib/content.ts`

---

Remember: Your content should answer these key questions:
1. What do you do?
2. Who do you help?
3. What makes you different?
4. How can people work with you?
