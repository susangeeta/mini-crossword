# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Here’s the README in markdown format:

````markdown
# CamCom Assignment: NYT Mini Crossword

## Description

A mini crossword game built as a Single Page Application (SPA). Users can solve crossword puzzles with interactive settings.

## Features

- **Crossword Gameplay:**
  - Interactive grid for typing answers.
  - Clue display for solving puzzles.
  - Answer validation and completion check.
- **Responsive Design:**  
  The application is fully responsive and works seamlessly on devices of all screen sizes, including mobile, tablet, and desktop.
  - **Puzzle Settings:**
    - Difficulty levels (Easy, Medium, Hard).
    - Timer for time-based gameplay.
  - **Game Settings:**
    - Theme switching (Light/Dark).

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/username/CamCom-assignment.git
   ```
````

2. Navigate to the project directory:
   ```bash
   cd CamCom-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Deployment

The app is deployed and available at the following URL:

[Live Demo](https://mini-crossword-jade.vercel.app/)

## Folder Structure

src/
│
├── components/ # React components
├── context/ # State management (if using Context API)
├── constants/ # Static data like puzzle answers
├── styles/ # Styling files
├── utils/ # Helper functions
├── App.js # Main component
├── index.js # Entry point
└── assets/ # Images, icons, etc.

## Technologies Used

- **Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Context
- **Deployment:** Vercel
