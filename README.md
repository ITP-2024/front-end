This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

New Folder Structure
```bash
src/
|-- pages/
|   |-- OrderManagement/
|   |   |-- index.tsx
|   |   |-- orders.tsx
|   |   |-- complain.tsx
|   |   |-- searchbar.tsx
|   |   |-- card.tsx
|   |   |-- barChart.tsx
|   |-- InventoryManagement/
|   |   |-- index.tsx
|   |   |-- products.tsx
|   |   |-- lowInventories.tsx
|   |   |-- addProduct.tsx
|   |   |-- card.tsx
|   |   |-- searchbar.tsx
|   |-- financeManagement/
|   |   |-- index.tsx
|   |-- reviewManagement/
|   |   |-- index.tsx
|   |-- customerGiftbox/
|   |   |-- index.tsx
|   |-- customerCart/
|   |   |-- index.tsx
|   |-- api/
|   |   |-- mongo.ts
|   |   |-- products.ts
|   |   |-- categories.ts
|   |   |-- sizes.ts
|   |   |-- giftBox.ts
|-- components/
|   |-- adminTopbar.tsx
|   |-- adminDropdown.tsx
|   |-- adminNavbar.tsx
|   |-- header.tsx
|   |-- foter.tsx
|-- public/
|   |-- user.svg
|   |-- search.svg
|-- globals.css
|-- index.tsx
|-- layout.tsx
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
