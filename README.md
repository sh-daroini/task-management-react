# Task Manager

A simple, thoughtfully designed task manager for keeping everyday work in order. Add tasks, track what is still in progress, and check off completed work from a clean dashboard.

## Live demo

[Try Task Manager](https://task-management-react-azure.vercel.app/)

## Features

- Create and delete tasks
- Mark tasks as complete or active
- Filter the list by all, active, or completed tasks
- Save tasks in the browser with `localStorage`, so they remain available after a refresh
- View task counts and completion progress at a glance
- Use a responsive interface designed for desktop and mobile screens

> **Note:** The current sign-in flow is for demonstration purposes. Task data is stored in the browser and is not synced to an account or server.

## Built with

- React
- Vite
- Tailwind CSS
- React Router

## Getting started

You'll need Node.js and npm installed.

```bash
git clone <repository-url>
cd task-manager
npm install
npm run dev
```

Open the local URL printed by Vite to use the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Data and privacy

Tasks are saved in this browser's `localStorage` under the `task-manager-tasks` key. They stay on the current browser and device; clearing browser storage will remove them.
