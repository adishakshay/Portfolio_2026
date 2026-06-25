"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    let seed = 12345;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (random() - 0.5) * 12;
      pos[i * 3 + 1] = (random() - 0.5) * 12;
      pos[i * 3 + 2] = (random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Gentle rotation based on time and mouse pointer
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.01 + state.mouse.y * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01 + state.mouse.x * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#eae6df"
        size={0.018}
        sizeAttenuation={true}
        transparent
        opacity={0.25}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

interface ThreeSceneProps {
  children: React.ReactNode;
}

export default function ThreeScene({ children }: ThreeSceneProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={["#080707", 3, 10]} />
        
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 10]} intensity={6.0} color="#eae6df" />
        <pointLight position={[-10, -10, -10]} intensity={2.0} color="#b84e31" />
        
        <Suspense fallback={null}>
          <ParticleField />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}


