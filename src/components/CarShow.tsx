import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Car } from './car';

const ICubeCamera: any = CubeCamera;

export const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[3, 2, 5]}
        key={undefined}
        view={undefined}
        quaternion={undefined}
        attach={undefined}
        args={undefined}
        onUpdate={undefined}
        up={undefined}
        scale={undefined}
        rotation={undefined}
        matrix={undefined}
        layers={undefined}
        dispose={undefined}
        onClick={undefined}
        onContextMenu={undefined}
        onDoubleClick={undefined}
        onPointerUp={undefined}
        onPointerDown={undefined}
        onPointerOver={undefined}
        onPointerOut={undefined}
        onPointerEnter={undefined}
        onPointerLeave={undefined}
        onPointerMove={undefined}
        onPointerMissed={undefined}
        onPointerCancel={undefined}
        onWheel={undefined}
        visible={undefined}
        type={undefined}
        id={undefined}
        uuid={undefined}
        name={undefined}
        parent={undefined}
        modelViewMatrix={undefined}
        normalMatrix={undefined}
        matrixWorld={undefined}
        matrixAutoUpdate={undefined}
        matrixWorldAutoUpdate={undefined}
        matrixWorldNeedsUpdate={undefined}
        castShadow={undefined}
        receiveShadow={undefined}
        frustumCulled={undefined}
        renderOrder={undefined}
        animations={undefined}
        userData={undefined}
        customDepthMaterial={undefined}
        customDistanceMaterial={undefined}
        isObject3D={undefined}
        onBeforeRender={undefined}
        onAfterRender={undefined}
        applyMatrix4={undefined}
        applyQuaternion={undefined}
        setRotationFromAxisAngle={undefined}
        setRotationFromEuler={undefined}
        setRotationFromMatrix={undefined}
        setRotationFromQuaternion={undefined}
        rotateOnAxis={undefined}
        rotateOnWorldAxis={undefined}
        rotateX={undefined}
        rotateY={undefined}
        rotateZ={undefined}
        translateOnAxis={undefined}
        translateX={undefined}
        translateY={undefined}
        translateZ={undefined}
        localToWorld={undefined}
        worldToLocal={undefined}
        lookAt={undefined}
        add={undefined}
        remove={undefined}
        removeFromParent={undefined}
        clear={undefined}
        getObjectById={undefined}
        getObjectByName={undefined}
        getObjectByProperty={undefined}
        getObjectsByProperty={undefined}
        getWorldPosition={undefined}
        getWorldQuaternion={undefined}
        getWorldScale={undefined}
        getWorldDirection={undefined}
        raycast={undefined}
        traverse={undefined}
        traverseVisible={undefined}
        traverseAncestors={undefined}
        updateMatrix={undefined}
        updateMatrixWorld={undefined}
        updateWorldMatrix={undefined}
        toJSON={undefined}
        clone={undefined}
        copy={undefined}
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
        zoom={undefined}
        matrixWorldInverse={undefined}
        projectionMatrix={undefined}
        projectionMatrixInverse={undefined}
        isCamera={undefined}
        near={undefined}
        far={undefined}
        isPerspectiveCamera={undefined}
        aspect={undefined}
        focus={undefined}
        filmGauge={undefined}
        filmOffset={undefined}
        setFocalLength={undefined}
        getFocalLength={undefined}
        getEffectiveFOV={undefined}
        getFilmWidth={undefined}
        getFilmHeight={undefined}
        setViewOffset={undefined}
        clearViewOffset={undefined}
        updateProjectionMatrix={undefined}
        setLens={undefined}
      />

      <color args={[0, 0, 0]} attach="background" />

      <ICubeCamera>
        {(texture: any) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </ICubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};
