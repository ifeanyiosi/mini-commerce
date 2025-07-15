# 🛍️ Mini-Commerce – E-commerce Prototype

## Overview

**Mini-Commerce** is a simple, fully client-side e-commerce prototype built with modern web technologies including **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It demonstrates the core features of an online store, including:

- ✅ **Product Catalog** – Browse 8+ products with images, titles, and prices  
- ✅ **Product Detail Pages** – View in-depth product information  
- ✅ **Shopping Cart** – Add/remove items, update quantities  
- ✅ **Checkout Flow** – Simulated checkout with order confirmation  
- ✅ **Persistent State** – Cart state saved using `localStorage`  
- ✅ **Responsive Design** – Optimized for mobile, tablet, and desktop  

The app was built with a strong focus on accessibility, responsiveness, TypeScript strictness, and modern development practices.

---

## 🧠 Design Approach

### Layout & UX

- Clean, minimalist interface centered around products  
- Responsive grid layout for catalog browsing  
- Two-column product pages (stacked layout on mobile)  
- Progressive, step-by-step checkout flow  
- Clear visual hierarchy and consistent spacing  

### Color Scheme

- Accessible and elegant palette using **OKLCH** color space  
- Light and dark mode support via custom theme variables  
- **Primary**: Slate blue tones  
- **Accent**: Sage green variants  
- **Alerts/Destructive**: Deep burgundy red  
- Neutral background layers ensure readability and contrast  

### Responsive Behavior

- Mobile-first layout using Tailwind’s responsive utilities  
- Flexible grids, scalable typography, and adaptive spacing  
- Collapsible menus and touch-friendly UI elements  

---

## 🛠️ Tools & Technologies

### Core Stack

- **Next.js** – Routing, performance, and full-stack features  
- **React** – Declarative UI components  
- **TypeScript** – Strict types, no `any`, maximum safety  
- **Tailwind CSS** – Utility-first styling with custom themes  
- **shadcn/ui** – Prebuilt components for faster development  

### State Management

- **Zustand** – Lightweight global store for cart state  
- **localStorage** – Persists cart across sessions  
- **Selectors** – Derive cart totals and quantities efficiently  

### Data Layer

- **React Query** – Handles data fetching, caching, and revalidation  
- **Mock API** – Simulated backend with static JSON data  
- **localStorage Fallback** – Seeds product data if API fails  

---

## ✅ Testing

- **Jest** – Test runner for unit and logic tests  
- **React Testing Library** – Simulates real user interactions  
- **Coverage Focus**:  
  - Key components like `ProductCard`  
  - Critical user flows such as cart actions and checkout  

---

## 💡 Development Quality

- **ESLint** & **Prettier** – Enforce consistent, clean code  
- **Strict TypeScript** – Max type safety, no `any`  
- **CI-ready** – GitHub Actions for automated linting and testing  

---

## 🔍 SEO & Metadata

- **Semantic HTML** – Accessible and structured markup  
- **Meta Tags** – Titles, descriptions, and viewport settings  
- **Open Graph Tags** – Social sharing previews  
- **Structured Data** –  
  - `Product` schema  
  - `BreadcrumbList`  
  - `Organization` schema in footer  

---

## ⚡ Performance Optimizations

- **Next.js optimizations** – Code splitting, prefetching  
- **Image Optimization** – Using Next.js `<Image />` component  
- **Data Caching** – React Query keeps network requests minimal  
- **Lazy Loading** – Non-critical content loads on demand  
- **Minimal Dependencies** – Fast load times and small bundles  

---

## ♿ Accessibility

- Semantic tags and landmarks  
- Sufficient color contrast  
- ARIA attributes where applicable  
- Keyboard and screen-reader friendly forms and buttons  
- Mobile-first touch targets  

---

## ⚠️ Error Handling Strategy

### General Resilience

- Visual loading states  
- Friendly error messages  
- Empty cart illustrations  
- Fallback UI components  

### Specific Cases

- **Product Fetch Failures** – Retry buttons + fallback to localStorage  
- **Cart Edge Cases** – Prevent invalid quantities and handle missing items  
- **404 Routes** – Custom not found page and redirects  
- **Error Boundaries** – Global error handler with recovery UI  

### Debug & Recovery

- Console logs for dev visibility  
- Zustand middleware validation  
- Auto-recovery of cart state on reload  

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run the test suite:

```bash
npm test
```

Build for production:

```bash
npm run build
```

---

## 🔮 Future Enhancements

- 🔍 Product search and filters  
- 👤 User authentication  
- ⭐ Product reviews  
- 💾 Wishlist saving  
- 🧾 Order history  
- 🎯 Cart animations  
- 🌐 i18n for multi-language support