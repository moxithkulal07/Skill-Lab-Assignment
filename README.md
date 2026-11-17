# K Mokshith — Personal Portfolio Website

> **Assignment - 1: Personal Portfolio Website**  
> A modern, responsive, 3D interactive personal portfolio website engineered with Next.js, React, Tailwind CSS, Three.js, and Lucide React.

---

## 🌟 Overview & Key Highlights

This website serves as a central hub to showcase:
- **Profile & Introduction:** Highlighting academic excellence (94.83% in PUC, 92.96% in SSLC) and engineering aspirations.
- **Projects:** Live showcases of **CampusLoop**, **MediLens**, and **Dynamic Train ETA** with direct GitHub links.
- **Interactive 3D Experience:** Three.js particle universe and rotating geometric tech core with mouse parallax response.
- **Skills & Tech Stack:** Categorized into Programming Languages, Frontend Development, Backend Development, and Development Tools.
- **Experience & Activities:** Hackathons, research paper presentation guided by Kiran P. Acharya, and web application development.
- **Education Timeline:** Sahyadri College of Engineering & Management (B.E. CSE, 2025–2029), Vivekananda PU College, and Govt High School Vittal.
- **Interactive Contact:** Form validation with direct dispatch and celebration confetti via `canvas-confetti`.
- **Theme Switching:** Dark / Light mode toggle with persistent state.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React.js](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics:** [Three.js](https://threejs.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Interactivity:** Custom JavaScript form validation & `canvas-confetti`
- **Deployment Ready:** Configured for one-click deployment on [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
MokshithPortfolio/
├── public/
│   └── profile.jpg             # User's uploaded portrait image
├── src/
│   ├── app/
│   │   ├── about/page.tsx      # Dedicated About page route
│   │   ├── achievements/page.tsx# Dedicated Achievements page route
│   │   ├── contact/page.tsx    # Dedicated Contact page route
│   │   ├── education/page.tsx  # Dedicated Education page route
│   │   ├── experience/page.tsx # Dedicated Experience page route
│   │   ├── projects/page.tsx   # Dedicated Projects page route
│   │   ├── skills/page.tsx     # Dedicated Skills page route
│   │   ├── globals.css         # Global styles, variables & glassmorphism
│   │   ├── layout.tsx          # Root layout with 3D canvas, Navbar & Footer
│   │   └── page.tsx            # Main landing page with all integrated sections
│   ├── components/
│   │   ├── About.tsx           # Bio, interests, and career objective
│   │   ├── Achievements.tsx    # Awards, research, and hackathon milestones
│   │   ├── Contact.tsx         # Validated form, confetti & social links
│   │   ├── Education.tsx       # Timeline of B.E., PUC, and SSLC
│   │   ├── Experience.tsx      # Activities, research & hackathons
│   │   ├── Footer.tsx          # Reusable footer with smooth back-to-top
│   │   ├── Hero.tsx            # Headline, 3D photo showcase & quick CTA
│   │   ├── Navbar.tsx          # Reusable responsive navigation & drawer
│   │   ├── Projects.tsx        # 3D project cards with repository links
│   │   ├── Skills.tsx          # Categorized interactive tech stack
│   │   ├── ThemeToggle.tsx     # Dark/Light mode switcher
│   │   └── ThreeCanvas.tsx     # Three.js 3D particle universe & tech orb
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data
│   └── lib/
│       └── utils.ts            # Class merging utility
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

1. Push your repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mokshith's 3D personal portfolio"
   git branch -M main
   git remote add origin https://github.com/moxithkulal07/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository and click **Deploy**. Vercel will automatically build and publish your Next.js portfolio website!
