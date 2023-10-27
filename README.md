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
8. Database

- Create a new database in PlanetScale
- Install the PlanetScale CLI
- Create new database branch 'dev'
- Connect the database to the app

9. Prisma

- Install Prisma Client `npm install @prisma/client`
- Install Prisma as a dev dependency `npm install prisma --save-dev`
- Initialize Prisma `npx prisma init`
- Change the provider to `mysql`
- Add `relationMode = "prisma"` to the schema.prisma file
- Add the database URL `DATABASE_URL = 'mysql://root@127.0.0.1:3309/<DATABASE_NAME>'` to the .env file
- Create User model in the schema.prisma file
- Push the schema to the database `npx prisma db push`

10. Prisma schemas

- Finished the User model
- Journal model
- Analysis model

11. Create a database Utility method file `db.ts` to ensure that only one instance of Prisma Client is being used

12. Creating a new user

- Make href dynamic, depending if the user is logged in or not
- Write creating a new user logic in the `new-user` page

13. Create Journal page

- Layout component
- Create Journal page

14. Add UserButton component from Clerk

15. Selecting journal entries

- create `auth.ts` file in the `utils` folder to fetch a user from the database using Prisma and Clerk authentication.

16. New Journal Entry UI

- Create `EntryCard` & `NewEntryCard` components
- Style the components and add them to the `Journal` page

17. Journal Card

- onClick event to the `EntryCard` component
- Api `journal` route to fetch a single journal entry
- Create `api.ts` file in the `utils` folder to fetch a journal entry from the database using Prisma

18. Entry Cards

- Structure & style the `EntryCard` component

19. New Entry page

- Create `[id]` folder in the `journal` folder
- Create `page.tsx` file in the `[id]` folder
- Use `params` to fetch a single journal entry
- Add a interface for the `Entry` type using `PrismaClient`

20. Displaying entry details

- Create `Editor` component
- Add `getEntry` function to the `Entry` page.
- Modify the prisma schema, changing ` @@index([userId])` to ` @@index([userId, id])`

21. Editor component

- Create `textarea`, with a `defaultValue` of the entry content, and `onChange` event to update the entry content

21. Update entry content

- Function, Route &Logic to update the entry content
- `[id]` folder in the `journal` folder
- `route.ts` file in the `[id]` folder

22. Auto-save entry content

- install `react-autosave`
- implemented `Autosave` in the `Editor` component

23. Sidebar

24. AI

- Install `langchainjs`
- Create `ai.ts`

25. Template to create consistent prompts

- Write instructions to generate consistent prompts
- Install Zod
- Use a schema to generate more consistent prompts, in `parser` function in `ai.ts`
- `getPrompts function` in `ai.ts`
- Parse JSON response from OpenAI

26. Connecting the Sidebar UI

- Add `include: { analysis: true, },` to the prisma call in `page.tsx` in the id folder
- Destructure `mood`, `summary`, `subject`, `color`, `negative` from the `entry.analysis` object

27. Add analysis data to Entry

- Modify `route.ts` file in the `[id]` folder to update the entry with the analysis data

```ts
const analysis = await analyze(updatedEntry.content)

await prisma.analysis.upsert({
  where: {
    entryId: updatedEntry.id,
  },
  data: { entryId: updatedEntry.id, ...analysis },
  update: analysis,
})
```

- added `onDelete: CASCADE` to the `entry` field in the `Analysis` model in the `schema.prisma` file to delete the analysis data when the entry is deleted

28. Revalidation & Client State Management
29. Search UI
30. Similarity Searches with Vectors
31. Search API & Results
32. Computing a Sentiment Score
