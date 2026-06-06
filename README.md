# LearnOS — Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js 14, Supabase, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **"New project"** and wait for it to provision
3. Go to **Project Settings → API** and copy:
   - `Project URL` → this is your `NEXT_PUBLIC_SUPABASE_URL`
   - `anon / public` key → this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Create the courses table

In your Supabase dashboard, go to **SQL Editor** and run:

```sql
CREATE TABLE courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  progress integer NOT NULL DEFAULT 0,
  icon_name text NOT NULL DEFAULT 'BookOpen',
  created_at timestamp with time zone DEFAULT now()
);

-- Seed data
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('System Design Fundamentals', 40, 'Network'),
  ('TypeScript Deep Dive', 90, 'FileCode'),
  ('Database Architecture', 25, 'Database');
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Then fill in your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/dashboard`.

---

## 🚢 Deployment (Vercel)

1. Push your code to a public GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. In the Vercel dashboard, go to **Settings → Environment Variables** and add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**

> ⚠️ Never commit your `.env.local` file. It's in `.gitignore` by default.
