# Luminary: Cyber Command Dashboard 💡

## Overview
Luminary is a sophisticated web application designed to empower users in their cybersecurity education journey. Built with **Next.js** and **TypeScript**, it provides an intuitive dashboard for tracking educational progress, managing course enrollments, and visualizing skill development through interactive charts. The application leverages **Zustand** for efficient state management and features a modern, responsive user interface crafted with **Shadcn UI** and **Tailwind CSS**.

## Features
-   **Interactive Cyber Command Dashboard**: A centralized hub to monitor overall educational progress and key metrics.
-   **Education Consistency Chain Tracking**: Set up and manage weekly learning goals, visualize consistency, and view accomplishment status.
-   **Dynamic Course Enrollment & Progress Monitoring**: Explore various cybersecurity education types (Offensive, Defensive, Cloud Security, etc.) and track individual course progress.
-   **Skill Matrix and Career Progression Visualizations**: Gain insights into skill development and career path progression through graphical representations.
-   **Modern & Responsive UI**: Seamless user experience across different devices, powered by Shadcn UI components.
-   **Efficient State Management**: Utilizes Zustand for predictable and performant application state handling.

## Getting Started

### Installation
To get Luminary up and running on your local machine, follow these steps:

✨ **Clone the repository:**
```bash
git clone https://github.com/raveroses/Test-Luminary-Cyber-Command-Dashboard-Clone-.git
cd luminary
```

📦 **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```
LIVE LINK : https://test-luminary-cyber-command-dashboard-clone-whsve5elj.vercel.app/
### Environment Variables
This project currently relies on local data and does not require specific environment variables for basic operation. However, if integrating with external services like Supabase (as indicated by the client library), you might configure them in a `.env.local` file:

-   `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL.
-   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase public anon key.

Example `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL="https://your-supabase-url.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ...your-anon-key...eyJ"
```

## Usage
Once the project is installed and dependencies are set up, you can start the development server:

🚀 **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

**Interacting with the Dashboard:**
1.  **Navigate the Dashboard:** Explore the main dashboard (`/`) to see an overview of your consistency chain, skill matrix, and study time graph.
2.  **Set Up Consistency Chain:** Click on the "Consistency chain" button (often found within a card on the main dashboard) to open the modal. Here you can:
    *   **Enroll in a Cluster:** Click the "Enroll to setup consistency chain" link, which will take you to the `/course` page.
    *   **Select Education Type:** Choose an education type from the dropdown (e.g., "Offensive Operations," "Defensive Operations").
    *   **Set Weekly Completion Count:** Adjust the number of weeks you aim to complete using the `+` and `-` buttons.
    *   **Pick a Start Date:** Use the calendar to select your desired start date.
    *   **Confirm:** Click "CONFIRM" to save your consistency chain settings.
3.  **Enroll in Courses:** On the `/course` page, browse the available education types and their courses.
    *   For each course, you can click "START" to mark it as started. This action triggers a success notification.
    *   Clicking "ENROLL" on an education type registers you for that entire cluster, updating the dashboard with your enrolled course details.
4.  **View Progress:** The dashboard will dynamically update to reflect your enrolled courses, their individual progress, and overall skill progression through the various charts and progress indicators.
5.  **Explore Charts:** The BarChart (`Study Hours`) and DoughnutChart (`Career skill progression`) on the dashboard provide visual insights into your learning activity and skill development.

## Technologies Used
Luminary is built using a modern stack, combining robust frameworks and libraries:

| Technology                | Description                                                          | Link                                                       |
| :------------------------ | :------------------------------------------------------------------- | :--------------------------------------------------------- |
| **Next.js**               | React framework for production-grade applications.                   | [nextjs.org](https://nextjs.org/)                          |
| **React**                 | A JavaScript library for building user interfaces.                   | [react.dev](https://react.dev/)                            |
| **TypeScript**            | Strongly typed JavaScript that compiles to plain JavaScript.         | [typescriptlang.org](https://www.typescriptlang.org/)      |
| **Zustand**               | A small, fast, and scalable bear-necessities state-management solution. | [zustand.ai](https://zustand-zustand.vercel.app/)          |
| **Tailwind CSS**          | A utility-first CSS framework for rapidly building custom designs.   | [tailwindcss.com](https://tailwindcss.com/)              |
| **Shadcn UI**             | Reusable components built using Radix UI and Tailwind CSS.           | [ui.shadcn.com](https://ui.shadcn.com/)                    |
| **Chart.js**              | Simple yet flexible JavaScript charting for designers & developers.  | [www.chartjs.org](https://www.chartjs.org/)                |
| **React Chart.js 2**      | React wrapper for Chart.js.                                          | [react-chartjs-2.js.org](https://react-chartjs-2.js.org/)  |
| **Supabase JS Client**    | JavaScript client for interacting with Supabase APIs.                | [supabase.com/docs/reference/javascript](https://supabase.com/docs/reference/javascript/initializing) |
| **date-fns**              | Modern JavaScript date utility library.                              | [date-fns.org](https://date-fns.org/)                      |
| **React Toastify**        | A flexible React notification library.                               | [fkhadra.github.io/react-toastify](https://fkhadra.github.io/react-toastify/) |

## Contributing
We welcome contributions to enhance Luminary! If you're interested in improving the project, please follow these guidelines:

⭐ **Fork the repository:**
   Start by forking the Luminary repository to your GitHub account.

🌿 **Create a new branch:**
   Create a dedicated branch for your feature or bug fix. Use a descriptive name like `feat/new-feature` or `fix/bug-description`.

💻 **Implement your changes:**
   Write clear, concise code that adheres to the project's coding standards.

🧪 **Test your changes:**
   Ensure your additions or fixes work as expected and don't introduce new issues.

⬆️ **Commit your changes:**
   Write meaningful commit messages that explain your modifications.

🗣️ **Open a pull request:**
   Submit a pull request to the `main` branch of the original repository. Provide a detailed description of your changes and why they are necessary.

We appreciate your efforts to make Luminary even better!

## Author Info
**[Your Name Here]**

-   **LinkedIn**: [Your LinkedIn Profile URL]
-   **Twitter**: [Your Twitter Handle]
-   **Portfolio**: [Your Portfolio Website URL]

---
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-2D2D2D?style=for-the-badge&logo=zustand&logoColor=white)](https://zustand-zustand.vercel.app/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)

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

