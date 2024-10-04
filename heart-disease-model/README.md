This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

This template provides a basic structure for your heart disease visualization project. Here's a summary of what's included:

1. A main page component (`app/page.tsx`) that sets up the 3D canvas and Leva controls.
2. A Heart component (`components/Heart.tsx`) that loads and renders the 3D heart model, with animations controlled by GSAP.
3. An AppContext (`context/AppContext.tsx`) for managing the application state.
4. A StageDescription component (`components/StageDescription.tsx`) for displaying information about the current stage.
5. An updated layout file (`app/layout.tsx`) that wraps the application with the AppProvider.


To complete the setup, you'll need to:

1. Install the necessary dependencies (Next.js, Three.js, @react-three/fiber, @react-three/drei, GSAP, Leva).
2. Add your 3D heart models (you'll need three different models for the different stages).
3. Implement the logic to switch between the different heart models based on the stage.
4. Add more detailed descriptions for each stage.
5. Refine the UI and add any additional features you need.


Remember to replace the placeholder `/heart.glb` in the Heart component with your actual 3D model file. You may also need to adjust the geometry and material names to match your model.

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Heart.tsx
│   └── StageDescription.tsx
├── context/
│   └── AppContext.tsx
├── package.json
└── next.config.js
```

This template should give you a solid starting point for your project. Let me know if you need any clarification or have any questions!
