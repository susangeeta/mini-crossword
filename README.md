# Mini Crossword Clone

## Overview

A sophisticated mini crossword application built as a Single Page Application (SPA), offering an immersive puzzle-solving experience. This project demonstrates modern web development practices while providing an engaging user interface for crossword enthusiasts.

## Key Features

### Core Gameplay

- **Interactive Grid System**
  - Dynamic cell selection with intelligent direction switching
  - Automatic direction toggling (horizontal ↔ vertical) on double-click
  - Smart cursor advancement to next cell after input
  - Keyboard navigation support using arrow keys

### Advanced Game Mechanics

- **Directional Input System**
  - Primary click: Activates horizontal input mode
  - Secondary click: Switches to vertical input mode
  - Cross-reference validation for intersecting words

### User Experience

- **Intelligent Interface**
  - Active word highlighting
  - Current cell emphasis

### Customization Options

- **Game Settings**
  - Configurable timer functionality
  - Optional hint system

### Technical Features

- **Responsive Design**

  - Mobile-first approach
  - Adaptive layout for all screen sizes

- **Performance Optimization**
  - Efficient state management
  - Minimal re-renders
  - Optimized puzzle validation

## Technical Stack

### Core Technologies

- React 18.2.0
- Vite 5.0.0
- Tailwind CSS 3.4.0

### State Management

- React Context API

### Development Tools

- ESLint
- Prettier

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/nyt-mini-crossword-clone.git
```

2. Navigate to project directory

```bash
cd nyt-mini-crossword-clone
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

## Project Structure

```
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
```

## Gameplay Instructions

### Cell Selection and Input

1. **Single Click**

   - Activates horizontal input mode
   - Highlights current word row
   - Advances cursor automatically after input

2. **Double Click on Same Cell**

   - Toggles between horizontal and vertical input
   - Updates highlighting to match current direction
   - Maintains position for input

3. **Keyboard Navigation**
   - Arrow keys to move between cells

## Deployment

The application is deployed and accessible at:
[Live Demo](https://mini-crossword-jade.vercel.app/)
