# Parash Awasthi — Developer Portfolio

A responsive personal developer portfolio built to showcase my skills, projects, and progress toward becoming a full-stack developer.

## Features

- Responsive desktop and mobile navigation
- Persistent dark and light themes
- Animated page sections
- Skills overview with animated progress bars
- Project roadmap and status cards
- Contact form that prepares an email message
- GitHub and LinkedIn profile links
- Responsive footer and return-to-top control

> The CV download will be enabled after `Parash-Awasthi-CV.pdf` is added to the React app's `public` directory.

## Technologies

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure

The React application currently lives inside the `professional-portfolio` directory. When deploying with Vercel, set the project root directory to `professional-portfolio`.

```text
awesome-portfolio/
├── professional-portfolio/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Running Locally

Clone the repository and enter the React project:

```bash
git clone https://github.com/parash0725/awesome-portfolio.git
cd awesome-portfolio/professional-portfolio
```

Install the dependencies and start Vite:

```bash
npm install
npm run dev
```

Create an optimized production build:

```bash
npm run build
```

The generated production files are written to `professional-portfolio/dist`.

## Deployment

Recommended Vercel settings:

- Root directory: `professional-portfolio`
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The production URL will be added here after the first Vercel deployment.

## Author

Parash Awasthi  
[GitHub](https://github.com/parash0725) · [LinkedIn](https://www.linkedin.com/in/parash-awasthi/)
