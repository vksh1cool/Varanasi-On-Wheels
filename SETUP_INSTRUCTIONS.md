# Varanasi On Wheels - Setup Instructions

## Google Analytics & Tag Manager Configuration

### 1. Google Analytics Setup

✅ **Already Configured!**

- **Google Analytics ID**: `G-GQGSX6LPC3`
- Tracking is active and collecting data
- View reports at [Google Analytics](https://analytics.google.com/)

### 2. Google Tag Manager Setup

✅ **Already Configured!**

- **Google Tag Manager ID**: `GTM-PJTD3G4K`
- Container is active and managing tracking codes
- Manage tags at [Google Tag Manager](https://tagmanager.google.com/)

### 3. Contact Buttons Configuration

The floating Call and WhatsApp buttons are already added to your website!

To configure the phone numbers:

1. Open `components/ui/FloatingContactButtons.tsx`
2. Update these lines:
   ```typescript
   const phoneNumber = '+919876543210'; // Replace with your actual phone number
   const whatsappNumber = '919876543210'; // Replace with your WhatsApp number (without +)
   ```
3. Optionally, customize the WhatsApp message:
   ```typescript
   const whatsappMessage = encodeURIComponent('Your custom message here');
   ```

### 4. Google Site Verification

✅ Already configured! The verification meta tag is set in `app/layout.tsx`:
```
google-site-verification=ZvzXoQxY9XEz-_TIbftnUOgwhfT--hz_PMqQO3ECatA
```

## Blog Posts

### New Blog Posts Added

Three new SEO-optimized blog posts have been added:

1. **Monsoon Magic in Varanasi** (August 2024)
   - URL: `/blog/monsoon-magic-varanasi`
   - Focus: Monsoon season travel, Teej festival, rainy season tips

2. **Winter Pilgrimage Season in Varanasi** (December 2024)
   - URL: `/blog/winter-pilgrimage-varanasi`
   - Focus: Winter festivals, Ganga snan, comfortable winter travel

3. **Summer Escapes from Varanasi to Hill Stations** (May 2025)
   - URL: `/blog/summer-escapes-varanasi`
   - Focus: Hill station tours, outstation packages, summer travel

### Blog Features

- ✅ SEO-optimized with proper meta descriptions
- ✅ 800+ words each
- ✅ Proper keyword density (2-3%)
- ✅ Internal links to vehicles and tours
- ✅ Featured images
- ✅ Responsive design
- ✅ Social sharing metadata

## SEO Optimization

### robots.txt

✅ Already created at `public/robots.txt` with:
- Allow all search engines
- LLM crawler optimization (GPTBot, Claude, etc.)
- Sitemap reference
- Proper disallow rules

### Testing

All blog posts have been tested and pass:
- ✅ Word count requirements (800+ words)
- ✅ Keyword density (2-3%)
- ✅ HTML structure validation
- ✅ Meta description length (150-160 chars)
- ✅ Service and location references
- ✅ Call-to-action presence

Run tests with:
```bash
npm test
```

## Deployment Checklist

Before going live:

1. [✅] Google Analytics ID configured: `G-GQGSX6LPC3`
2. [✅] Google Tag Manager ID configured: `GTM-PJTD3G4K`
3. [✅] Phone numbers updated: `7800664900`
4. [✅] Email updated: `varanasionwheels5@gmail.com`
5. [✅] All blog images in `/public/assets/`
6. [✅] All blog post URLs working
7. [ ] Submit sitemap to Google Search Console
8. [ ] Verify Google site verification in Search Console
9. [ ] Test floating contact buttons on mobile and desktop
10. [ ] Test all contact forms

## Running the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## Building for Production

```bash
npm run build
npm start
```

## Support

For any issues or questions, refer to the spec documents in `.kiro/specs/blog-seo-optimization/`
