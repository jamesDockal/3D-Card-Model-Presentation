import React from 'react';
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export const Effects: React.FC = () => {
  return (
    <EffectComposer>
      {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
      <Bloom
        blendFunction={BlendFunction.ADD}
        intensity={1.3}
        width={300}
        height={300}
        kernelSize={5}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.025}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0005, 0.0012] as any}
      />
    </EffectComposer>
  );
};
