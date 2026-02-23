# 🍽️ CaterServ - Modern Next.js Catering Website 

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-f01bd4?style=for-the-badge&logo=framer&logoColor=white)

CaterServ is a high-performance, pixel-perfect clone of the popular catering HTML template. This project demonstrates how to completely refactor a legacy Bootstrap/jQuery template into a **modern, scalable, and fully typed React application** using Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations Engine:** Motion.js (Framer Motion)
- **Iconography:** FontAwesome 5
- **Typography:** `Playball` (Cursive) & `Open Sans` via Next/Font

---

## ✨ Key Technical Upgrades & Features

We eliminated all heavy third-party legacy libraries to ensure optimal performance and Core Web Vitals.

| Legacy Feature (Original HTML) | Modern Implementation in this Repo |
| :--- | :--- |
| **WOW.js + Animate.css** | Replaced entirely with **Framer Motion** (`whileInView`, `staggerChildren`). Custom Spring animations replicate the exact `bounceInUp` feeling dynamically. |
| **jQuery OwlCarousel** | Built a **100% custom Native React State Slider** using Tailwind Flex layouts for the Testimonials section (No extra dependencies). |
| **jQuery CounterUp** | Implemented using Framer Motion's `animate()` function coupled with `useInView` for live, buttery-smooth number counting on scroll. |
| **Bootstrap Grid & CSS** | Migrated fully to **Tailwind CSS**. Advanced features like card color inversions and hover logic are handled strictly via Tailwind's `group` and `group-hover` directives. |
| **Repeating UI Elements** | DRY Architecture using TypeScript components (e.g., `<PageHeader />` for reusable breadcrumbs, mappings for rendering grid cards). |

---

## 📂 Project Architecture

Organized with clean code practices utilizing the Next.js `app` directory structure.

```text
📦 caterserv-nextjs
 ┣ 📂 app
 │ ┣ 📂 about
 │ │ ┗ 📜 page.tsx          # About history, counters, and Team grids
 │ ┣ 📂 contact
 │ │ ┗ 📜 page.tsx          # Styled contact forms & contact info cards
 │ ┣ 📂 event
 │ │ ┗ 📜 page.tsx          # Image Gallery grid layout
 │ ┣ 📂 menu
 │ │ ┗ 📜 page.tsx          # Animated Menu tabs and listings
 │ ┣ 📂 services
 │ │ ┗ 📜 page.tsx          # 8-Card Grid and React Testimonial Carousel
 │ ┣ 📜 globals.css         # Global tailwind imports & CSS animations
 │ ┣ 📜 layout.tsx          # Global Layout containing FontAwesome & Navbar/Footer
 │ ┣ 📜 not-found.tsx       # Animated 404 fallback page
 │ ┗ 📜 page.tsx            # Main Landing/Home Page
 ┣ 📂 components
 │ ┣ 📜 Footer.tsx          # Global Footer Component
 │ ┣ 📜 Navbar.tsx          # Dynamic Sticky Navbar with Mobile Toggle
 │ ┗ 📜 PageHeader.tsx      # Reusable Hero Section with breadcrumbs
 ┣ 📜 tailwind.config.ts    # Configured with custom Gold theme colors (#d4a762)
 ┗ 📜 tsconfig.json         # Strict TypeScript rules enabled



 ### Isme Sab Details Kaise Cover Hain?
* **TypeScript** ko highlight kiya gaya hai "Key Technical Upgrades" aur Project folder details mein.
* **Framer Motion (Motion.js)** ki proper explanation di hai (ki kis tareeke se aapne Wow.js aur jQuery counter-up ko pure Framer Motion Hooks me replace kar diya hai).
* **Tailwind CSS** ki Advanced UI logic (jaise `group-hover` aur Diamond rotation) mention ki gayi hai taaki aapki frontend knowledge shine kare!
