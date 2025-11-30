# 🚀 Quick Start - TAPD OUT with ShaderBackground

Your project is now fully set up and ready to run! Follow these simple steps:

## Installation & Running

```bash
# 1. Install all dependencies
npm install

# 2. Run the development server
npm run dev
```

## 🎉 That's it!

Open your browser and navigate to:
```
http://localhost:3000
```

You should see:
- ✨ Beautiful **blue animated shader background**
- 🎨 Your TAPD OUT branding with the orange/yellow theme
- 📱 Platform detection (iOS/Android/Desktop)
- 🔄 Auto-redirect for mobile users
- 🎯 Download buttons for both app stores

---

## 📝 What You Need to Configure

### Update App Store URLs

Edit `app/page.tsx` (lines 7-8) and replace with your actual URLs:

```typescript
const APP_STORE_URL = "https://apps.apple.com/app/YOUR_APP_ID";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";
```

---

## 🎨 Customization

### Change Background Colors

Edit `components/ui/shader-background.tsx`:

```glsl
// Line ~34: Line color
const vec4 lineColor = vec4(0.2, 0.4, 0.9, 1.0); // Blue

// Lines ~74-75: Background gradient
vec4 bgColor1 = vec4(0.05, 0.1, 0.3, 1.0);  // Dark blue
vec4 bgColor2 = vec4(0.1, 0.2, 0.5, 1.0);   // Medium blue
```

### Change Animation Speed

```glsl
// Line 9: Speed multiplier
const float overallSpeed = 0.2; // Higher = faster
```

---

## 📦 Project Structure

```
tapd-redirect/
├── app/
│   ├── page.tsx          # Main page (your redirect logic)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/
│       ├── shader-background.tsx  # Blue WebGL background
│       └── demo.tsx              # Usage examples
├── lib/
│   └── utils.ts          # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🔧 Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Lint code
npm run lint
```

---

## ✅ Features Included

- ✨ **Blue animated WebGL shader background** (hardware-accelerated)
- 📱 **Platform detection** (iOS/Android/Desktop)
- 🔄 **Auto-redirect** for mobile devices
- 🎨 **Original TAPD OUT design** (orange/yellow theme)
- 💨 **Fast performance** with Next.js 14
- 🎯 **TypeScript** for type safety
- 🌊 **Tailwind CSS** for styling
- ♿ **Responsive design** for all screen sizes

---

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### WebGL not working?
- Check browser console for errors
- Make sure you're using a modern browser (Chrome, Firefox, Edge, Safari)
- Component will show a warning if WebGL is not supported

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Options
- **Netlify**: Connect GitHub repo or drag & drop `.next` folder
- **AWS Amplify**: Connect GitHub repo
- **Docker**: Use the included Dockerfile (if needed)

---

## 📞 Need Help?

Check these files for more info:
- `README.md` - Detailed documentation
- `SETUP_INSTRUCTIONS.md` - Complete setup guide
- `components/ui/demo.tsx` - Usage examples

---

**Built with ❤️ for TAPD OUT** 💧🔫

