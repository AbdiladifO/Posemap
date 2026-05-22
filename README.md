# PoseMap

An interactive 3D anatomy posing tool for artists

PoseMap-
is a browser-based figure drawing reference application that allows artists to pose a human figure and observe anatomically accurate changes in real time to use as a reference in their art

Final Year Project 
(BSc Computer Science, Kingston University, 2025/26).  
Abdiladif Omar 
K2334174

---

## Quick Start

###  what you need
- **Node.js** v18 or higher — download from [nodejs.org](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)

### Installation

```bash
# 1. Clone or extract the project
cd posemap

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173**

---

## How to use - intro 

|



| Action | How |
|---|---|
| Select a body part | Click on it in the 3D view |
| Rotate joint | Use the X/Y/Z sliders in the right panel |
| Deselect | Click empty space or press `Esc` |
| Reset pose | Click Reset button or press `R` |
| Undo/Redo | `Ctrl+Z` / `Ctrl+Y` |
| Switch layer | Click Mannequin / Muscles / Surface or press `1` `2` `3` |
| Save pose | Click the Save icon or `Ctrl+S` |
| Load/Presets | Click the Load icon  `Ctrl+L` |
| Export PNG | Bottom-right export bar → ↓ PNG |
| Export JSON | Bottom-right export bar → ↓ JSON |

Camera controls - Left-drag to orbit , Right-drag to pan , Scroll to zoom

## Project Structure

```
src/
├── engine/
│   ├── poseEngine.ts        # Core domain logic (constraints, hierarchy, pose mutation)
│   ├── poseEngine.test.ts   # Unit tests
│   └── figureGeometry.ts    # 3D segment dimensions and colour definitions
├── store/
│   └── useStore.ts          # Zustand global state (pose, UI, saves)
├── components/
│   ├── canvas/              # Three.js / React Three Fiber components
│   │   ├── Scene.tsx        # Lighting, camera, ground
│   │   ├── Figure.tsx       # Root figure component
│   │   ├── SkeletalJoint.tsx # Recursive joint node
│   │   └── BodySegment.tsx  # Individual mesh + interaction
│   ├── controls/            # UI input controls
│   │   ├── ControlPanel.tsx # Right-side rotation panel
│   │   └── RotationSlider.tsx
│   ├── layout/              # App chrome
│   │   ├── Toolbar.tsx
│   │   └── StatusBar.tsx
│   └── ui/                  # Modals and overlays
│       ├── SavePanel.tsx
│       ├── LoadPanel.tsx
│       ├── ExportControls.tsx
│       └── HelpPanel.tsx
├── hooks/
│   └── useKeyboardShortcuts.ts
├── types/
│   └── index.ts             # All TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css






## Technology Stack

| Technology then  Role |
| React 18 + TypeScript | UI framework and type safety |
| Vite | Build tool and dev server |
| React Three Fiber | Declarative Three.js in React |
| Three.js | 3D rendering engine |
| @react-three/drei | Three.js helpers (OrbitControls, Grid, etc.) |
| Zustand | Global state management |
| Zod | Runtime validation (schemas) |
| Tailwind CSS | Utility-first styling |
| Vitest | Unit testing |


