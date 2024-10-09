import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

interface HeartProps {
  stage: number;
}

export default function Heart({ stage }: HeartProps) {
  const group = useRef<THREE.Group>(null)
  const modelPath = `/heart-stage_${stage}.glb`
  console.log('Loading model from path:', modelPath)
  const { scene, nodes, materials } = useGLTF(modelPath, true, (error) => {
    console.error('Error loading model:', error)
  })

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.z = Math.sin(t / 1.5) / 20
    }
  })

  useEffect(() => {
    console.log('Loaded scene:', scene)
    console.log('Loaded nodes:', nodes)
    console.log('Loaded materials:', materials)

    const nodeName = `HeartStage${stage}`
    if (nodes && nodes[nodeName]) {
      const geometry = (nodes[nodeName] as THREE.Mesh).geometry
      console.log('UV Coordinates:', geometry.attributes.uv)

      // Verify UVs
      const uvs = geometry.attributes.uv.array
      for (let i = 0; i < uvs.length; i += 2) {
        console.log(`UV ${i / 2}: (${uvs[i]}, ${uvs[i + 1]})`)
      }

      // Check for normal map
      const material = (nodes[nodeName] as THREE.Mesh).material as THREE.MeshStandardMaterial
      if (material.normalMap) {
        console.log('Normal Map:', material.normalMap)
      }
    } else {
      console.error(`${nodeName} mesh not found in the model`)
    }
  }, [nodes, materials, scene, stage])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <group ref={group}>
        {nodes && nodes[`HeartStage${stage}`] ? (
          <mesh geometry={(nodes[`HeartStage${stage}`] as THREE.Mesh).geometry} material={(nodes[`HeartStage${stage}`] as THREE.Mesh).material} />
        ) : (
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
        )}
      </group>
    </>
  )
}

useGLTF.preload('/heart-stage_1.glb')
useGLTF.preload('/heart-stage_2.glb')
useGLTF.preload('/heart-stage_3.glb')