'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Leva, useControls } from 'leva'

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Heart Disease Visualization</h1>
      <div className="w-full h-[600px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <OrbitControls />
          <Suspense fallback={null}>
            <Heart stage={stage} />
          </Suspense>
        </Canvas>
      </div>
      <Leva />
    </main>
  )
}