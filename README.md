# 📌 Overview

The mood project uses essential dependencies like Clerk, Prisma, Next.js, React, and TailwindCSS for building a web application with features like autosave, and data visualization with Recharts. It also includes testing libraries and tools like Jest and ESLint for quality assurance.

## 🔍 Table of Contents

- [📌 Overview](#-overview)
  - [🔍 Table of Contents](#-table-of-contents)
  - [💻 Stack](#-stack)
  - [⚙️ Setting Up](#️-setting-up)
      - [Your Environment Variable](#your-environment-variable)
  - [🚀 Run Locally](#-run-locally)


## 💻 Stack

- [clerk/nextjs](https://github.com/clerkinc/clerk-sdk-nextjs): Provides authentication and user management capabilities for Next.js applications.
- [prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client): An ORM (Object-Relational Mapping) tool for TypeScript and JavaScript that simplifies database access and management.
- [next](https://nextjs.org/): A framework for server-rendered React applications, providing features like routing, server-side rendering, and static site generation.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [recharts](https://recharts.org/): A charting library for React that provides a wide range of customizable and interactive charts.
- [testing-library/react](https://testing-library.com/docs/react-testing-library/intro): A testing utility for React applications that encourages testing user interactions with the UI.
- [typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript, adding static typing and other features to enhance developer productivity and code quality.

## ⚙️ Setting Up

#### Your Environment Variable

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/journal
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user
OPENAI_API_KEY=
DATABASE_URL=
```

## 🚀 Run Locally

1.Clone the mood repository:

```sh
git clone https://github.com/manuelpastorringuelet/mood
```

2.Install the dependencies with one of the package managers listed below:

```bash
pnpm install
bun install
npm install
yarn install
```

3.Start the development mode:

```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

