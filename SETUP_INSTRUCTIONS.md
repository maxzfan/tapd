# ShaderBackground Component - Setup Instructions

## Current Project State

Your project currently contains a plain HTML file (`index.html`) and needs to be converted to a React + TypeScript + Tailwind CSS project to use the ShaderBackground component.

## 📋 Prerequisites

You need to set up a proper React/TypeScript environment with shadcn/ui support.

---

## 🚀 Setup Options

### Option 1: Create New Next.js Project (Recommended)

This is the most straightforward approach and follows shadcn/ui best practices.

```bash
# 1. Create a new Next.js project with TypeScript and Tailwind CSS
npx create-next-app@latest tapd-redirect-react --typescript --tailwind --eslint

# 2. Navigate to the project
cd tapd-redirect-react

# 3. Initialize shadcn/ui
npx shadcn@latest init
```

When running `shadcn init`, you'll be asked several questions:
- **Style**: Choose your preferred style (default is fine)
- **Base color**: Choose "Blue" or "Slate"
- **Global CSS file**: `app/globals.css` (or `src/app/globals.css`)
- **CSS variables for colors**: Yes (recommended)
- **tailwind.config location**: `tailwind.config.ts`
- **Import alias for components**: `@/components` ⚠️ IMPORTANT
- **Import alias for utils**: `@/lib/utils`

```bash
# 4. Copy the shader-background component
# Copy the following files from your current project:
# - components/ui/shader-background.tsx
# - components/ui/demo.tsx
```

---

### Option 2: Vite + React (Lighter Alternative)

If you prefer a lighter setup without Next.js:

```bash
# 1. Create Vite project with React + TypeScript
npm create vite@latest tapd-redirect-react -- --template react-ts

# 2. Navigate to the project
cd tapd-redirect-react

# 3. Install dependencies
npm install

# 4. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Initialize shadcn/ui
npx shadcn@latest init

# 6. Install path resolution for TypeScript
npm install -D @types/node
```

Update `vite.config.ts`:
```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 📁 Why `/components/ui` is Important

The `/components/ui` directory structure is critical for shadcn/ui projects:

1. **Convention**: shadcn/ui expects all primitive components in `/components/ui`
2. **Separation**: Keeps shadcn components separate from your custom components
3. **Maintainability**: Easy to identify which components come from shadcn
4. **CLI Integration**: When you run `npx shadcn@latest add button`, it automatically places components here
5. **Documentation**: All shadcn examples assume this structure
6. **Import Paths**: Using `@/components/ui/*` is the standard pattern

### Recommended Structure:
```
project/
├── components/
│   ├── ui/                    # shadcn/ui components (primitives)
│   │   ├── shader-background.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── demo.tsx
│   └── custom/                # Your custom components
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
└── app/ or src/
```

---

## 🎨 Component Analysis

### ShaderBackground Component

**Dependencies:**
- ✅ React (with hooks: `useEffect`, `useRef`)
- ✅ TypeScript (uses proper types)
- ✅ Tailwind CSS (uses `className="fixed top-0 left-0 w-full h-full -z-10"`)
- ✅ WebGL (browser API, no external dependency needed)

**Props/State:**
- No props required (self-contained)
- Internal state managed via WebGL canvas and animation frame
- Uses TypeScript for type safety

**External Dependencies Required:**
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

**Dev Dependencies Required:**
```json
{
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0"
}
```

**No additional packages needed!** The component uses:
- Native WebGL API
- React hooks (built-in)
- Tailwind utility classes (no custom CSS)

---

## 🎯 Component Features

### Visual Characteristics (Blue Theme)
- **Background**: Blue gradient (dark blue to medium blue)
- **Lines**: Animated blue plasma-like lines
- **Effect**: Flowing wave pattern with circles
- **Position**: Fixed background layer (`-z-10`)

### Technical Details
- **Performance**: Uses WebGL for hardware-accelerated rendering
- **Responsive**: Automatically resizes with window
- **Animation**: Smooth 60fps animation using requestAnimationFrame
- **Compatibility**: Works on all WebGL-enabled browsers

### Use Cases
1. **Landing Page Background**: Perfect for hero sections
2. **App Background**: Full-screen animated background
3. **Loading Screens**: Engaging visual while content loads
4. **Dashboard Background**: Subtle animated backdrop

---

## 📦 Installation Steps (After Project Setup)

```bash
# No additional npm packages needed!
# The component only requires React, TypeScript, and Tailwind CSS
```

---

## 💻 Usage Example

### Basic Usage (in a Next.js page):

```typescript
// app/page.tsx or pages/index.tsx
import ShaderBackground from "@/components/ui/shader-background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ShaderBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-white">
          Welcome to TAPD OUT
        </h1>
      </div>
    </main>
  );
}
```

### With Your Current TAPD OUT Design:

```typescript
import ShaderBackground from "@/components/ui/shader-background";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-5">
      <ShaderBackground />
      
      <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl p-12 shadow-2xl border-8 border-orange-500">
        <div className="text-6xl font-black text-orange-500 uppercase tracking-tight mb-2">
          TAPD OUT
        </div>
        <div className="text-2xl font-bold text-yellow-500 uppercase mb-8">
          Senior Assassin
        </div>
        
        <div className="text-5xl mb-5">💧🔫</div>
        
        <div className="inline-block bg-yellow-500 text-gray-900 px-5 py-2.5 rounded-xl font-black text-sm uppercase border-3 border-gray-900 shadow-md mb-5">
          Get The App!
        </div>
        
        <h1 className="text-4xl font-black uppercase mb-5">
          Redirecting...
        </h1>
        <p className="text-xl text-gray-600 font-semibold">
          Download the TAPD app to join the game!
        </p>
      </div>
    </div>
  );
}
```

---

## 🔧 Customization Options

### Change Colors
Edit the shader code in `shader-background.tsx`:

```glsl
// Line 34: Line color
const vec4 lineColor = vec4(0.2, 0.4, 0.9, 1.0); // R, G, B, A

// Lines 74-75: Background gradient
vec4 bgColor1 = vec4(0.05, 0.1, 0.3, 1.0);  // Dark blue
vec4 bgColor2 = vec4(0.1, 0.2, 0.5, 1.0);   // Medium blue
```

### Adjust Animation Speed
```glsl
// Line 9: Overall speed multiplier
const float overallSpeed = 0.2; // Increase for faster, decrease for slower
```

### Change Position/Size
```typescript
// In the component's return statement:
<canvas 
  ref={canvasRef} 
  className="fixed top-0 left-0 w-full h-full -z-10" 
  // Change className to adjust position and z-index
/>
```

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Project builds without errors: `npm run build`
- [ ] Dev server runs: `npm run dev`
- [ ] ShaderBackground renders (animated blue background visible)
- [ ] No console errors related to WebGL
- [ ] Background resizes properly when window resizes
- [ ] Tailwind classes work correctly
- [ ] TypeScript types resolve without errors

---

## 🐛 Troubleshooting

### "Cannot find module '@/components/ui/shader-background'"
**Solution**: Check your `tsconfig.json` has the path alias configured:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### WebGL not working
**Solution**: Check browser console for WebGL errors. The component will log a warning if WebGL is not supported.

### Blank screen
**Solution**: Make sure parent container has height set:
```typescript
<div className="min-h-screen">
  <ShaderBackground />
</div>
```

### Component renders but no animation
**Solution**: Check that the canvas is visible and not covered by other elements with higher z-index.

---

## 🎨 Integration Complete!

Your component is now ready to use. The blue-themed shader background will provide a beautiful, animated backdrop for your TAPD OUT app.

### Next Steps:
1. Complete the project setup using one of the options above
2. Copy the component files to your new project
3. Import and use ShaderBackground in your pages
4. Customize colors and animation to match your brand

---

## 📞 Component Details

**File**: `components/ui/shader-background.tsx`  
**Demo**: `components/ui/demo.tsx`  
**Dependencies**: None (uses built-in WebGL)  
**Browser Support**: All modern browsers with WebGL support  
**Performance**: Hardware-accelerated, 60fps  
**Theme**: Blue (customizable)

