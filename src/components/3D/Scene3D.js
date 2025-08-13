import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import FloatingCube from './FloatingCube';

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#d946ef" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <Stars
            radius={300}
            depth={60}
            count={1000}
            factor={7}
            saturation={0}
            fade
            speed={1}
          />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <FloatingCube position={[-5, 2, -5]} color="#d946ef" size={0.8} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <FloatingCube position={[5, -2, -3]} color="#06b6d4" size={1.2} />
          </Float>
          
          <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
            <FloatingCube position={[0, 3, -8]} color="#22c55e" size={0.6} />
          </Float>
          
          <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
            <FloatingCube position={[-3, -3, -6]} color="#f59e0b" size={0.9} />
          </Float>
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;