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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Setup

1. Create .prettierrc file in the root directory, add the following code:

```json
{
  "semi": false,
  "singleQuote": true
}
```

2. Install `prettier-plugin-tailwindcss`and Create .prettier.config.js file in the root directory, add the following code:

```bash
npm install prettier-plugin-tailwindcss
```

```js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

3. Deleted all the code in the global.css file, despite the tailwind directories:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Create folders in the root directory: `app`: `(dashboard)`, `api`, `new-user`, `sign-in`, `sign-up`
5. Create minimalistic landing page in `page.txt` file
6. Auth using Clerk

- Install Clerk
- Create Clerk account
- Wrap the app with ClerkProvider
- Create sign in and sign up folders & pages
- Protect the routes using a middleware
- Set up environment variables
- Add afterSignInUrl and afterSignUpUrl to the Sign-Up component

7. Create a new-user page
