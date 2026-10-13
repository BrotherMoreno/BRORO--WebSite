"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";

const stops = ["#e8e94a", "#d6d233", "#4c8439", "#164427", "#0b301e"].map((c) => new THREE.Color(c));

function buildGeometry() {
  // Banda de Möbius: referencia a la cinta continua del logo.
  const fn = (u: number, v: number, t: THREE.Vector3) => {
    const a = u * Math.PI * 2;
    const w = (v - 0.5) * 1.15;
    const r = 2 + w * Math.cos(a / 2);
    t.set(r * Math.cos(a), r * Math.sin(a), w * Math.sin(a / 2));
  };
  const g = new ParametricGeometry(fn, 180, 18);
  const uv = g.attributes.uv;
  const colors = new Float32Array(uv.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < uv.count; i++) {
    const t = (0.5 + 0.5 * Math.cos(uv.getX(i) * Math.PI * 2)) * (stops.length - 1);
    const k = Math.min(Math.floor(t), stops.length - 2);
    c.copy(stops[k]).lerp(stops[k + 1], t - k);
    colors.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return g;
}

function Ribbon() {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => buildGeometry(), []);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.z += delta * 0.18;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 1.0 + state.pointer.y * 0.35, 0.05);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.45, 0.05);
  });
  return (
    <group ref={group} scale={0.95}>
      <mesh geometry={geometry}>
        <meshStandardMaterial vertexColors side={THREE.DoubleSide} roughness={0.35} metalness={0.1} />
      </mesh>
    </group>
  );
}

export default function RibbonCanvas() {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 7], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 5]} intensity={2.4} color="#f4f6d0" />
      <directionalLight position={[-5, -3, 2]} intensity={1.1} color="#4c8439" />
      <Ribbon />
    </Canvas>
  );
}
