# LearnHub – Sample Next.js Learning Platform

A slightly larger, design-focused Next.js 14 app using the App Router.

## Features

- App Router with `app` directory
- Root layout with sticky navbar & footer
- Pages:
  - Home landing page
  - Courses listing and dynamic course detail `/courses/[slug]`
  - Instructors page
  - Dashboard with nested layout:
    - `/dashboard`
    - `/dashboard/courses`
    - `/dashboard/profile`
  - Auth pages: `/auth/login`, `/auth/register`
- Simple API route `/api/hello`
- Centralized course + instructor data
- Custom handcrafted CSS for a modern dark UI

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.
