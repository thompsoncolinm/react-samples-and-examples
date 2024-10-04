import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

interface HeartProps {
  stage: number;
}

export default function Heart({ stage }: HeartProps) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/heart.glb')

  useEffect(() => {
    if (group.current) {
      gsap.to(group.current.rotation, {
        y: stage * Math.PI * 2 / 3,
        duration: 1,
        ease: 'power2.inOut',
      })
    }
  }, [stage])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = Math.sin(t / 1.5) / 20
  })

  return (
    <group ref={group}>
      <mesh geometry={(nodes.Heart as THREE.Mesh).geometry} material={materials.HeartMaterial} />
    </group>
  )
}

useGLTF.preload('/heart.glb')