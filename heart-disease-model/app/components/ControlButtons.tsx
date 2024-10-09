import { MutableRefObject } from 'react'
import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls'

interface ControlButtonsProps {
  controls: MutableRefObject<OrbitControlsImpl | null>;
}

const ControlButtons = ({ controls }: ControlButtonsProps) => {
  const handleRotateLeft = () => {
    if (controls.current) {
      controls.current.autoRotate = true
      controls.current.autoRotateSpeed = -2 // Negative value for left rotation
      controls.current.update()
    }
  }

  const handleRotateRight = () => {
    if (controls.current) {
      controls.current.autoRotate = true
      controls.current.autoRotateSpeed = 2 // Positive value for right rotation
      controls.current.update()
    }
  }

  const handlePause = () => {
    if (controls.current) {
      controls.current.autoRotate = false
      controls.current.update()
    }
  }

//   const handleZoomIn = () => {
//     if (controls.current) {
//       controls.current.dollyIn(1.2)
//       controls.current.update()
//     }
//   }

//   const handleZoomOut = () => {
//     if (controls.current) {
//       controls.current.dollyOut(1.2)
//       controls.current.update()
//     }
//   }

  return (
    <div className="flex gap-4" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
      <button onClick={() => controls.current?.reset()}>Reset</button>
      <button onClick={handleRotateLeft}>Rotate Left</button>
      <button onClick={handleRotateRight}>Rotate Right</button>
      <button onClick={handlePause}>Pause</button>

      {/* <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button> */}
    </div>
  )
}

export default ControlButtons