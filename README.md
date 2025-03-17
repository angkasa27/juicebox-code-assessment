# Juicebox Indonesia - Frontend Code Assessment

### Overview

This repository contains the frontend code assessment for applying to the Frontend Developer role at Juicebox Indonesia. The project is built using Next.js and includes animation libraries like GSAP and Lottie, as required in the assessment.

### Getting Started

Follow these steps to set up and run the project:

1. Clone the Repository

```git clone https://github.com/your-username/juicebox-test.git
cd juicebox-test
```

2. Install Dependencies

```
npm install
# OR
yarn install
```

3. Run the Development Server

```
npm run dev
# OR
yarn dev
```

The project will start on http://localhost:3000.

4. Build for Production

```
npm run build
npm run start
```

### Tech Stack

- Next.js 15.2.2 - React framework for SSR & SSG
- React 19 - Component-based UI development
- GSAP - Animation library (as per the assessment requirement)
- Lottie React - Rendering Lottie JSON animations
- Lenis - Smooth scrolling experience
- Swiper - Carousel and slider integration
- TypeScript - Type safety and better developer experience

### Folder Structure

```
📦 juicebox-test
├── 📂 public
│   ├── 📂 fonts            # Custom fonts
│   ├── 📂 icons            # SVG or icon assets
│   └── 📂 images           # Static images
├── 📂 src
│   ├── 📂 app              # Page routing
│   ├── 📂 components
│   │   ├── 📂 fragments    # Reusable component sections
│   │   ├── 📂 hooks        # Custom hooks
│   │   └── 📂 ui           # UI components (buttons, inputs, etc.)
│   ├── 📂 constants        # Static values or configuration
│   ├── 📂 containers       # Page-level components
│   │   ├── use-page.ts     # Page-specific logic
│   │   ├── page.tsx        # Main page component
│   │   ├── index.ts        # Entry point
│   │   ├── page.type.ts    # Type definitions
│   │   └── page.module.css # Page-specific styles
│   └── 📂 providers        # Providers
└── README.md               # Project documentation
```
