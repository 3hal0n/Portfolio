import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { useGLTF } from '@react-three/drei';
// ...existing code...
useGLTF.preload('/models/interstellar_endurance_high_fidelity_draco.glb');
useGLTF.preload('/models/interstellar_ranger_one_draco.glb');
useGLTF.preload('/models/Astronaut_draco.glb');
useGLTF.preload('/models/blackhole_draco.glb');
useGLTF.preload('/models/computer.glb');
// ...existing code...

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
