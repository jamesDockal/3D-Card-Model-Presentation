import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { CarShow } from './components/CarShow';
import { Ground } from './components/Ground';

function App() {
  return (
    <Suspense>
      <Canvas shadows>
        <CarShow />
        <Ground />
      </Canvas>
    </Suspense>
  );
}

export default App;
