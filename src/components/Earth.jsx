import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/earth.glb')
  useAnimations(animations, group)

  useEffect(() => {
    if (nodes.EARTHLayer1_TERRE_0?.geometry) {
      const bbox = new THREE.Box3().setFromObject(nodes.EARTHLayer1_TERRE_0)
      console.log('Earth mesh bounding box:', bbox)
      console.log('Earth mesh position:', nodes.EARTHLayer1_TERRE_0.position)
    }
    console.log('Earth nodes:', nodes)
  }, [nodes])

  // Add rotation animation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.00037}>
      {/* Main Earth with original texture/material */}
      <mesh
        geometry={nodes.EARTHLayer1_TERRE_0?.geometry}
        material={materials.TERRE}
        castShadow
        receiveShadow
      />
      {/* Clouds with original material (optional) */}
      {nodes.EARTHLayer2_NUAGES_0 && materials.NUAGES && (
        <mesh
          geometry={nodes.EARTHLayer2_NUAGES_0.geometry}
          material={materials.NUAGES}
          castShadow
          receiveShadow
        />
      )}
    </group>
  )
}

useGLTF.preload('/models/earth.glb')