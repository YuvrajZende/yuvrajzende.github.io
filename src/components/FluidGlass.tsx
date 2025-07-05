import { Canvas } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

interface LensProps {
  scale?: number
  ior?: number
  thickness?: number
  chromaticAberration?: number
  anisotropy?: number
}

interface FluidGlassProps {
  mode: 'lens' | 'bar' | 'cube'
  lensProps?: LensProps
  barProps?: any
  cubeProps?: any
}

function Model({ mode, ...props }: { mode: string } & any) {
  let modelPath = '/assets/3d/'
  
  switch (mode) {
    case 'lens':
      modelPath += 'lens.glb'
      break
    case 'bar':
      modelPath += 'bar.glb'
      break
    case 'cube':
      modelPath += 'cube.glb'
      break
    default:
      modelPath += 'lens.glb'
  }

  // Fallback geometry if model fails to load
  const fallbackGeometry = new THREE.SphereGeometry(1, 32, 32)
  
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshTransmissionMaterial
        backside
        samples={10}
        resolution={2048}
        transmission={1}
        roughness={0.0}
        thickness={props.thickness || 5}
        ior={props.ior || 1.15}
        chromaticAberration={props.chromaticAberration || 0.1}
        anisotropy={props.anisotropy || 0.01}
        distortion={0.0}
        distortionScale={0.3}
        temporalDistortion={0.5}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
        color="#c9f0ff"
      />
    </mesh>
  )
}

const FluidGlass = ({ mode, lensProps, barProps, cubeProps }: FluidGlassProps) => {
  const currentProps = mode === 'lens' ? lensProps : mode === 'bar' ? barProps : cubeProps

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 25 }}>
      <color attach="background" args={['#f0f0f0']} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Suspense fallback={null}>
        <Model 
          mode={mode} 
          scale={currentProps?.scale || 0.25}
          {...currentProps}
        />
      </Suspense>
    </Canvas>
  )
}

export default FluidGlass