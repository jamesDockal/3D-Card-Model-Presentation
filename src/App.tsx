import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Car } from './components/car';
import { CarShow } from './components/CarShow';
import { Ground } from './components/Ground';
import { Rings } from './components/Rings';

function App() {
  return (
    <Suspense>
      <Canvas shadows>
        <CarShow />
        <Ground />
        {/* <Car /> */}
        <Rings />
      </Canvas>
    </Suspense>
  );
}

export default App;
