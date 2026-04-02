"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200 }) {
  const mesh = useRef();
  const light = useRef();
  const elapsed = useRef(0);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Mix red and teal particles
      if (Math.random() > 0.7) {
        colors[i * 3] = 0.9;
        colors[i * 3 + 1] = 0.22;
        colors[i * 3 + 2] = 0.27;
      } else {
        colors[i * 3] = 0.44;
        colors[i * 3 + 1] = 0.85;
        colors[i * 3 + 2] = 0.8;
      }

      sizes[i] = Math.random() * 0.03 + 0.005;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state, delta) => {
    elapsed.current += delta;
    const time = elapsed.current;
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.03;
      mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const groupRef = useRef();
  const elapsed = useRef(0);

  useFrame((state, delta) => {
    elapsed.current += delta;
    const time = elapsed.current;
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
      groupRef.current.rotation.z = Math.sin(time * 0.05) * 0.15;
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, -2]}>
      {/* Wireframe Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          color="#e63946"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color="#e63946"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.008, 16, 100]} />
        <meshBasicMaterial
          color="#6fd8cc"
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.005, 16, 100]} />
        <meshBasicMaterial
          color="#e63946"
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshBasicMaterial
        color="#e63946"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#e63946" />
        <Particles count={150} />
        <FloatingGeometry />
        <GridPlane />
      </Canvas>
    </div>
  );
}
