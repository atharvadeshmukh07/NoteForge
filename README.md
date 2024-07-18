# NoteForge - The connected workspace where better, faster work happens.

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
notion-clone/
  |- app/
    |-- (main)/
        |--- _components/
        |--- (routes)/documents/[documentId]/
        |--- layout.tsx
    |-- (marketing)/coures/[courseId]/
        |--- _components/
        |--- layout.tsx
        |--- page.tsx
    |-- (public)/
        |--- (routes)/preview/[documentId]/
        |--- layout.tsx
    |-- api/edgestore/[...edgestore]/
        |--- route.ts
    |-- error.tsx
    |-- globals.css
    |-- layout.tsx
    |-- not-found.tsx
  |- components/
    |-- modals/
    |-- providers/
    |-- ui/
    |-- cover.tsx
    |-- editor.tsx
    |-- icon-picker.tsx
    |-- mode-toggle.tsx
    |-- search-command.tsx
    |-- single-image-dropzone.tsx
    |-- spinner.tsx
    |-- toolbar.tsx
  |- config/
    |-- index.ts
  |- convex/
    |-- _generated/
    |-- .env.example
    |-- auth.config.js
    |-- documents.ts
    |-- environment.d.ts
    |-- schema.ts
    |-- tsconfig.json
  |- hooks/
    |-- use-cover-image.ts
    |-- use-origin.ts
    |-- use-scroll-top.ts
    |-- use-search.ts
    |-- use-settings.ts
  |- lib/
    |-- edgestore.ts
    |-- db.ts
  |- public/
  |- .env.example
  |- .env.local
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- environment.d.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** and **convex** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:<deployment-name> # team: <team-name>, project: <project-name>

# convex public url
NEXT_PUBLIC_CONVEX_URL="<your-convex-url>"

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# edge store keys
EDGE_STORE_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
EDGE_STORE_SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

5. Contents of `convex/.env.local`:

```env
# convex/.env.local

# clerk issuer url (go to your clerk dashboard > JWT Templates > New template > Convex > Save and copy your Issuer URL)
CLERK_ISSUER_URL=<your-clerk-issuer-url>
```

6. Convex Deployment

- Visit the Convex website: [https://convex.dev](https://convex.dev)
- Log in to your Convex account or sign up if you don't have one.
- Once logged in, navigate to the "Deployments" section.
- Create a new deployment or select an existing one.
- Replace `<deployment-name>`, `<team-name>`, and `<project-name>` in the `.env.local` file with your Convex deployment details.
- In the Convex dashboard, find the public URL associated with your deployment.
- Replace `<your-convex-url>` in the `.env.local` file with your Convex public URL.

7. Clerk Authentication Keys

- Visit the Clerk dashboard: [https://clerk.dev](https://clerk.dev)
- Log in to your Clerk account or sign up if you don't have one.
- Go to the "Projects" section and select your project.
- Navigate to the "API Keys" tab.
- Copy the "Publishable Key" and replace `<your-clerk-publishable-key>` in the `.env.local` file with the copied key.
- Copy the "Secret Key" and replace `<your-clerk-secret-key>` in the `.env.local` file with the copied key.
- Go to your Clerk dashboard > JWT Templates > New template > Convex > Save and copy your Issuer URL.
- Replace `<your-clerk-issuer-url>` with the url that you copied.
- Also, go to Convex dashboard > Settings > Environment Variables > Add `CLERK_ISSUER_URL` variable with value that you copied.

8. Edge Store Keys

- If you are using an Edge Store service, navigate to the respective dashboard or service provider.
- Obtain the "Access Key" and "Secret Key" for your Edge Store.
- Replace `<your-edge-store-access-key>` and `<your-edge-store-secret-key>` in the `.env.local` file with your Edge Store keys.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev` in one tab and `npx convex dev` in another tab.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")
