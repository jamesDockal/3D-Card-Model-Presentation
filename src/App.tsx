import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Boxes } from './components/Boxes';
import { Car } from './components/car';
import { CarShow } from './components/CarShow';
import { Effects } from './components/Effects';
import { FloatingGrid } from './components/Floatingrid';
import { Ground } from './components/Ground';
import { Rings } from './components/Rings';

function App() {
  return (
    <Suspense>
      <Canvas shadows>
        <CarShow />
        <Ground />
        <FloatingGrid />
        <Rings />
        <Boxes />
        <Effects />
      </Canvas>
    </Suspense>
  );
}

export default App;
