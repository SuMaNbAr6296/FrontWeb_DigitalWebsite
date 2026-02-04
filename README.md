# DEOS Social - Creative Digital Agency Website  🥳Live preview :- https://front-web-digital-website.vercel.app/

## Project Goal
The primary goal of this website is to showcase **DEOS Social**, a creative digital agency based in Kolkata. The site is designed to demonstrate the agency's ability to "create super-rich experiences online" and help brands navigate the digital landscape through creativity, technology, and data-driven insights. 

It serves as a portfolio and lead generation tool, highlighting the agency's methodology, past work, and core services to potential clients.

## Important Parts & Features

### Core Sections
The application is built as a single-page-like experience for the home page with dedicated routes for deeper content:

*   **Hero Section (`Hero.jsx`)**: The immediate visual impact, setting the tone for the "super-rich experience" with dynamic text and imagery.
*   **Visual Grid (`VisualGrid.jsx`)**: A media-heavy section that showcases the agency's creative output (videos/images) in an engaging grid layout.
*   **Integrated Solutions (`IntegratedSolutions.jsx`)**: detailed breakdown of the services offered, demonstrating the "Digital First" approach.
*   **Strategy (`Strategy.jsx`)**: Explains the agency's unique methodology and user-centric design process.
*   **Clients (`Clients.jsx`)**: Social proof displaying the roster of brands worked with.

### Key Pages
*   **About (`About.jsx`)**: Company history, "DNA" (Values), and Mission statement.
*   **Services (`Services.jsx`)**: Comprehensive list of agency capabilities.
*   **Work (`Work.jsx`)**: Portfolio of case studies and projects.
*   **Contact (`Contact.jsx`)**: "Get In Touch" form and contact details.

## Technical Components

### Layout
*   **`Navbar.jsx`**: A responsive navigation bar that adapts to scroll state. It features a desktop-only "Scroll to Top" button and a mobile-specific full-screen menu overlay.
*   **`Footer.jsx`**: The standardized page footer containing links and agency info.

### Technology Stack
*   **Frontend**: React (v19)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS (v4)
*   **Routing**: React Router Dom (v7)
*   **Icons**: Lucide React

## Getting Started

To run this project locally:

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Project Structure

The project follows a standard Vite + React directory structure, organized for scalability:

```
my-app/
├── public/              # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/          # Project-specific methods (images, fonts, etc.)
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   ├── pages/       # Full page components used in routing
│   │   ├── sections/    # Modular sections used within pages (Hero, VisualGrid)
│   │   └── utils/       # Utility components (ScrollToTop)
│   ├── App.jsx          # Main application component & Routing setup
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # Linting configuration
```

## Detailed Component Breakdown

### Layout Components (`src/components/layout`)
*   **Navbar**: The primary navigation header. It handles routing links and includes:
    *   **Desktop**: A clean horizontal menu with a search and "Scroll To Top" feature.
    *   **Mobile**: A full-screen overlay menu triggered by a hamburger icon. The redundant bottom-right FAB is hidden on mobile for clarity.
*   **Footer**: Contains consistent footer information across all pages.

### Page Architecture (`src/components/pages`)
The application uses `react-router-dom` for client-side routing.
*   **Home**: A composite page built from multiple "Section" components to create a rich landing experience.
*   **About, Services, Work, Contact**: Dedicated pages that provide specific information about the agency.
*   **OtherPages**: Handles less primary routes like 'Blog' and 'Careers'.

### Sections (`src/components/sections`)
*   **Hero.jsx**: The top-most section of the landing page, designed for high visual impact.
*   **VisualGrid.jsx**: A dynamic grid layout for displaying creative assets or portfolio highlights.
*   **IntegratedSolutions.jsx**: Displays the core service offerings.
*   **Strategy.jsx**: Outlines the company's approach and methodology.
*   **Clients.jsx**: a logo carousel or grid showing past clients.

This modular interaction allows for easy updates—changing the "Home" page design is as simple as rearranging these section components.

## Styling & Design System

The project uses **Tailwind CSS (v4)** extended with custom CSS variables and utilities defined in `src/index.css`.

### Brand Identity
*   **Colors**: The site uses a high-contrast palette.
    *   `--brand-yellow`: `#ffe600` (Primary Accent)
    *   `--brand-green`: `#50b848` (Secondary Accent)
    *   `--brand-black`: `#1a1a1a` (Primary Text)
*   **Typography**: `Open Sans` is used for body text, with Serif fonts reserved for headlines to create a premium feel.

### Custom Utilities
*   **Geometric Clips**: Custom CSS classes like `.clip-diagonal` and `.clip-zigzag-right` are used to create the dynamic, non-rectangular layout elements seen on the Home page.
*   **Patterns**: A `.zigzag-pattern` class provides a subtle texture to backgrounds.

## Key Features

*   **Smooth Scrolling**: Enabled globally via `html { scroll-behavior: smooth; }` for a fluid navigation experience.
*   **Scroll Restoration**: A generic `<ScrollToTop />` utility ensures that navigation between routes always starts at the top of the page.
*   **Responsive Design**: The site is fully responsive, with specific optimizations for mobile, such as:
    *   Touch-optimized inputs (preventing iOS zoom).
    *   Adaptive navigation (Hamburger menu vs. Horizontal bar).
    *   Touch-friendly interaction targets.
