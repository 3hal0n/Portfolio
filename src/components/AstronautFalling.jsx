import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function AstronautFalling(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('models/AstronautFalling.glb');

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
  );
}

useGLTF.preload('models/AstronautFalling.glb'); 