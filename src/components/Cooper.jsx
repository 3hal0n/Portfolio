import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'

export function Cooper(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/Walking astronaut.glb')
  const { actions } = useAnimations(animations, group)

  // Play the first animation if playAnimation prop is true
  useEffect(() => {
    if (props.playAnimation && actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]
      firstAction?.reset().play()
      return () => firstAction?.stop()
    }
  }, [props.playAnimation, actions])

  const astronautMaterial = new MeshStandardMaterial({ color: '#cccccc', metalness: 0.3, roughness: 0.7 })

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode0" scale={0.01}>
          <group name="geo1">
            <group name="astronaut2">
              <skinnedMesh
                name="mesh_0"
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                skeleton={nodes.mesh_0.skeleton}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="mesh_1"
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                skeleton={nodes.mesh_1.skeleton}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="mesh_2"
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
                skeleton={nodes.mesh_2.skeleton}
                castShadow
                receiveShadow
              />
            </group>
          </group>
          <group name="skeletal3">
            <primitive object={nodes.Root4} castShadow receiveShadow />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Walking astronaut.glb')