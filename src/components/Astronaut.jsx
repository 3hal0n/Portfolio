import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
export function Astronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/Astronaut.glb')
  const { actions } = useAnimations(animations, group)

  
  // Play the first animation if playAnimation prop is true
  useEffect(() => {
    if (props.playAnimation && actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]
      firstAction?.reset().play()
      return () => firstAction?.stop()
    }
  }, [props.playAnimation, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RootNode0" scale={0.01}>
          <group name="geo1">
            <group name="astronaut2" />
          </group>
          <group name="skeletal3">
            <skinnedMesh
              name="Mesh_0"
              geometry={nodes.Mesh_0.geometry}
              material={materials.Material_0}
              skeleton={nodes.Mesh_0.skeleton}
            />
            <skinnedMesh
              name="Mesh_1"
              geometry={nodes.Mesh_1.geometry}
              material={materials.Material_1}
              skeleton={nodes.Mesh_1.skeleton}
            />
            <skinnedMesh
              name="Mesh_2"
              geometry={nodes.Mesh_2.geometry}
              material={materials.Material_2}
              skeleton={nodes.Mesh_2.skeleton}
            />
            <primitive object={nodes.Root4} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Astronaut.glb')
