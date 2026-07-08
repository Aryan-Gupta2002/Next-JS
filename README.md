# Next-JS

Learning repo containing three separate Next.js apps.

## Tech Stack (common to all three apps)

- Next.js 16.2.10
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Axios

## Structure

```
Next-JS/
├── my-app/
├── my-app2/
└── my-app3/
```

## Running any of the apps

```bash
cd my-app   # or my-app2 / my-app3
npm install
npm run dev
```

`my-app2` additionally requires a `.env` file with `DATABASE_URL` set, and running `npx prisma migrate dev` before use (migration files are present in `my-app2/prisma/migrations`).
