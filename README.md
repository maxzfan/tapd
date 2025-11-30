# TAPD OUT - ShaderBackground Integration

This project integrates a beautiful blue-themed WebGL shader background component into a React + TypeScript + Tailwind CSS + shadcn/ui application.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Install additional required packages:**
```bash
npm install clsx tailwind-merge tailwindcss-animate
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
tapd-redirect/
├── components/
│   └── ui/
│       ├── shader-background.tsx   # Blue WebGL shader background
│       └── demo.tsx                # Component usage demos
├── lib/
│   └── utils.ts                    # Utility functions (cn helper)
├── app/                            # Next.js app directory (to be created)
│   ├── page.tsx                    # Main page
│   └── globals.css                 # Global styles
├── index.html                      # Original HTML (legacy)
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind CSS config
├── postcss.config.js               # PostCSS config
├── components.json                 # shadcn/ui config
├── SETUP_INSTRUCTIONS.md           # Detailed setup guide
└── README.md                       # This file
```

---

## 🎨 Component Features

### ShaderBackground
- **Blue-themed** animated WebGL shader background
- **Hardware-accelerated** rendering for smooth 60fps
- **Fully responsive** - automatically resizes with window
- **Zero dependencies** - uses native WebGL API
- **Easy to integrate** - just import and use

### Technical Stack
- ✅ **React 18** with TypeScript
- ✅ **Tailwind CSS** for styling
- ✅ **shadcn/ui** component structure
- ✅ **Next.js 14** (recommended) or Vite
- ✅ **WebGL** for graphics rendering

---

## 💻 Usage

### Basic Usage

```typescript
import ShaderBackground from "@/components/ui/shader-background";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ShaderBackground />
      
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  );
}
```

### With TAPD OUT Design

```typescript
import ShaderBackground from "@/components/ui/shader-background";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-5">
      <ShaderBackground />
      
      <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl p-12 shadow-2xl">
        <h1 className="text-6xl font-black text-orange-500">TAPD OUT</h1>
        <p className="text-2xl font-bold text-yellow-500">Senior Assassin</p>
        {/* More content */}
      </div>
    </div>
  );
}
```

---

## 🔧 Customization

### Change Colors
Edit `components/ui/shader-background.tsx`:

```glsl
// Line color (currently blue)
const vec4 lineColor = vec4(0.2, 0.4, 0.9, 1.0); // R, G, B, A

// Background gradient
vec4 bgColor1 = vec4(0.05, 0.1, 0.3, 1.0);  // Dark blue
vec4 bgColor2 = vec4(0.1, 0.2, 0.5, 1.0);   // Medium blue
```

### Adjust Animation Speed
```glsl
const float overallSpeed = 0.2; // Increase for faster animation
```

### Change Position
```typescript
<canvas 
  ref={canvasRef} 
  className="fixed top-0 left-0 w-full h-full -z-10" 
/>
```

---

## 📦 Dependencies

### Production Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `next` - React framework (or use Vite)
- `clsx` - Utility for conditional classNames
- `tailwind-merge` - Merge Tailwind classes

### Dev Dependencies
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM types
- `@types/node` - Node.js types

---

## 🛠️ Setup Steps (If Starting Fresh)

If you haven't set up the project yet, follow these steps:

1. **Option A: Next.js (Recommended)**
```bash
npx create-next-app@latest tapd-redirect-react --typescript --tailwind --eslint
cd tapd-redirect-react
npx shadcn@latest init
```

2. **Option B: Vite (Lighter)**
```bash
npm create vite@latest tapd-redirect-react -- --template react-ts
cd tapd-redirect-react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn@latest init
```

3. **Copy component files:**
- Copy `components/ui/shader-background.tsx`
- Copy `components/ui/demo.tsx`
- Copy `lib/utils.ts`

4. **Install additional packages:**
```bash
npm install clsx tailwind-merge tailwindcss-animate
```

See `SETUP_INSTRUCTIONS.md` for detailed setup guide.

---

## ✅ Verification

After setup, verify everything works:

```bash
# Build the project
npm run build

# Run development server
npm run dev

# Check for TypeScript errors
npx tsc --noEmit
```

### Expected Results:
- ✅ Animated blue background renders
- ✅ No console errors
- ✅ Background resizes with window
- ✅ TypeScript compiles without errors

---

## 🐛 Troubleshooting

### "Cannot find module '@/components/ui/shader-background'"
**Fix:** Check `tsconfig.json` has path aliases:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### WebGL not working
**Fix:** Check browser console. Component logs warning if WebGL unavailable.

### Blank screen
**Fix:** Ensure parent has height:
```typescript
<div className="min-h-screen">
  <ShaderBackground />
</div>
```

---

## 📝 Next Steps

1. ✅ Component files created in `components/ui/`
2. ⏳ Set up Next.js or Vite project structure
3. ⏳ Install dependencies: `npm install`
4. ⏳ Create `app/page.tsx` (Next.js) or `src/App.tsx` (Vite)
5. ⏳ Import and use ShaderBackground component
6. ⏳ Customize colors and animation to match your brand

---

## 📞 Support

For detailed instructions, see:
- `SETUP_INSTRUCTIONS.md` - Complete setup guide
- `components/ui/demo.tsx` - Usage examples
- `components/ui/shader-background.tsx` - Component source with comments

---

## 🎯 Component Details

- **File:** `components/ui/shader-background.tsx`
- **Type:** React Functional Component (TypeScript)
- **Dependencies:** None (uses native WebGL)
- **Browser Support:** All modern browsers with WebGL
- **Performance:** Hardware-accelerated, 60fps
- **Theme:** Blue (customizable)
- **License:** MIT (assumed)

---

**Built for TAPD OUT - Senior Assassin** 💧🔫

