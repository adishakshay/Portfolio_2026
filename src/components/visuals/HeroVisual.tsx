"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Dodecahedron, Torus, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HeroVisual() {
  const { width } = useThree().viewport;
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const gridRef = useRef<THREE.Mesh>(null!);
  const orbRef = useRef<THREE.Mesh>(null!);

  // Responsive positions and scale
  const isDesktop = width > 7;
  const posX = isDesktop ? 1.3 : 0;
  const posY = isDesktop ? 0.2 : 0.7;
  const scale = isDesktop ? 1.0 : 0.75;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotate the central dodecahedron
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + state.mouse.y * 0.2;
      meshRef.current.rotation.y = t * 0.2 + state.mouse.x * 0.2;
    }

    // Keep wireframe aligned with the core shape
    if (wireRef.current && meshRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
    }

    // Rotate and float the ring
    if (ringRef.current) {
      ringRef.current.rotation.x = -t * 0.05 + state.mouse.y * 0.1;
      ringRef.current.rotation.y = -t * 0.08 + state.mouse.x * 0.1;
      ringRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }

    // Orbit the target dot
    if (orbRef.current) {
      const radius = 2.4;
      const angle = t * 0.5;
      orbRef.current.position.x = Math.cos(angle) * radius;
      orbRef.current.position.z = Math.sin(angle) * radius;
      orbRef.current.position.y = Math.sin(t * 2) * 0.2;
    }

    // Animate the floor grid to feel alive
    if (gridRef.current) {
      gridRef.current.rotation.z = t * 0.015;
    }
  });

  return (
    <group>
      {/* 3D Tilted Wireframe Floor Grid */}
      <mesh 
        ref={gridRef}
        rotation={[-Math.PI / 2.2, 0, 0]} 
        position={[0, -2.4, -1]}
      >
        <planeGeometry args={[30, 30, 24, 24]} />
        <meshBasicMaterial 
          color="#b84e31" 
          wireframe 
          transparent 
          opacity={0.12} 
        />
      </mesh>

      {/* Floating 3D Main Scene Group */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <group position={[posX, posY, 0]} scale={scale}>
          {/* Core Dodecahedron */}
          <mesh ref={meshRef}>
            <Dodecahedron args={[1.3, 0]}>
              <meshStandardMaterial
                color="#54281f"
                roughness={0.4}
                metalness={0.75}
                flatShading
              />
            </Dodecahedron>
          </mesh>

          {/* Wireframe Overlay (Scaled slightly to prevent Z-fighting) */}
          <mesh ref={wireRef} scale={1.005}>
            <Dodecahedron args={[1.3, 0]}>
              <meshBasicMaterial
                color="#eae6df"
                wireframe
                transparent
                opacity={0.25}
              />
            </Dodecahedron>
          </mesh>

          {/* Orbiting Ring */}
          <mesh ref={ringRef} position={[0, 0.4, 0]}>
            <Torus args={[1.8, 0.012, 8, 100]}>
              <meshBasicMaterial 
                color="#b84e31" 
                transparent 
                opacity={0.5} 
              />
            </Torus>
          </mesh>

          {/* Orbiting Target Orb */}
          <mesh ref={orbRef}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#eae6df" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}


