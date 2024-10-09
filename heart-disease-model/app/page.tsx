'use client'

import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import ControlButtons from '@/components/ControlButtons' // Adjust the import path as necessary

const Heart = dynamic(() => import('@/components/Heart'), { ssr: false })

export default function Home() {
  const { stage } = useControls({
    stage: {
      value: 1,
      min: 1,
      max: 3,
      step: 1,
    },
  })

  const controls = useRef(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <h1 className="text-4xl font-bold mb-8">Heart Disease Visualization</h1>
      <div className="w-[100vw] h-[calc(100vh-12rem)] min-h-[600px] relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={<>Loading...</>}>
            <Heart stage={stage} />
          </Suspense>
          <OrbitControls ref={controls} />
        </Canvas>
        <ControlButtons controls={controls} />
      </div>
      <Leva />
    </main>
  )
}