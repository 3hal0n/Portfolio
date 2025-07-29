import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function InterstellarShip(props) {
  const { nodes, materials } = useGLTF('/models/interstellar_endurance_high_fidelity_draco.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.09}>
        <group
          position={[0, 857.358, -3199.705]}
          rotation={[0,0,0]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
        </group>
        <group position={[0, -857.498, -3200.226]} rotation={[0, -Math.PI / 2, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector001_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector001_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0, -2342.354, -2342.349]}
          rotation={[-Math.PI / 6, -Math.PI / 2, 0]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector002_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector002_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector002_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
        </group>
        <group position={[-0.001, -3199.712, -857.357]} rotation={[-Math.PI, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector003_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector003_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector003_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[-0.001, -3199.71, 857.362]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector004_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector004_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector004_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[-0.001, -2342.349, 2342.352]} rotation={[2.094, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector005_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector005_Metal_0.geometry}
            material={materials.Metal}
          />
        </group>
        <group position={[0, -857.358, 3199.711]} rotation={[-2.618, -Math.PI / 2, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector006_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector006_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector006_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
        </group>
        <group
          position={[-0.001, 857.362, 3199.709]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector007_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector007_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector007_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[0, 2342.353, 2342.349]} rotation={[2.618, -Math.PI / 2, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector008_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector008_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector008_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
        </group>
        <group position={[-0.001, 3199.711, 857.357]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector009_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector009_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector009_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[-0.001, 3199.71, -857.362]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector0010_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector0010_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector0010_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[-0.001, 2342.35, -2342.352]} rotation={[-Math.PI / 3, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector0011_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Connector0011_Metal_0.geometry}
            material={materials.Metal}
          />
        </group>
        <group rotation={[-2.618, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine_Tiles3_0.geometry}
            material={materials.Tiles3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine_RollingShuttle_0.geometry}
            material={materials.RollingShuttle}
          />
        </group>
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Command_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Command_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Command_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Command_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Command_Tiles2_0.geometry}
            material={materials.Tiles2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Command_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group position={[198.329, 0, -528.877]} rotation={[-Math.PI, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Port_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Port_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Port_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
        </group>
        <group rotation={[-Math.PI, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation_Tiles2_0.geometry}
            material={materials.Tiles2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lab_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lab_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lab_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lab_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lab_Tiles2_0.geometry}
            material={materials.Tiles2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lab_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[2.618, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine001_Tiles3_0.geometry}
            material={materials.Tiles3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine001_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine001_RollingShuttle_0.geometry}
            material={materials.RollingShuttle}
          />
        </group>
        <group rotation={[Math.PI / 6, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine002_Tiles3_0.geometry}
            material={materials.Tiles3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine002_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine002_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine002_RollingShuttle_0.geometry}
            material={materials.RollingShuttle}
          />
        </group>
        <group rotation={[-Math.PI / 6, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine003_Tiles3_0.geometry}
            material={materials.Tiles3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine003_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine003_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine003_RollingShuttle_0.geometry}
            material={materials.RollingShuttle}
          />
        </group>
        <group rotation={[-2.094, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={165.274}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation001_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation001_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation001_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation001_Tiles2_0.geometry}
            material={materials.Tiles2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Habitation001_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[-Math.PI / 3, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod001_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod001_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod001_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod001_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[Math.PI / 3, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod002_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod002_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod002_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod002_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod002_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[2.094, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod003_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod003_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod003_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod003_Glass1_0.geometry}
            material={materials.Glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pod003_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Tiles1_0.geometry}
            material={materials.Tiles1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Light_0.geometry}
            material={materials.Light}
          />
        </group>
        <group position={[198.329, 0, 528.877]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Port001_Tiles_0.geometry}
            material={materials.Tiles}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Port001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DockingHub_Port001_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
        </group>
        <group position={[512.462, 0, 482.909]} rotation={[Math.PI, -Math.PI / 9, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[512.462, 0, -482.909]} rotation={[Math.PI, Math.PI / 9, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1001_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1001_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1001_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0.001, 948.579, -3700.177]}
          rotation={[-1.658, -0.005, Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1002_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1002_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1002_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1002_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0.001, -2730.154, -2671.581]}
          rotation={[-2.705, -0.005, Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1003_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1003_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1003_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1003_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0.001, -948.581, 3700.172]}
          rotation={[1.484, -0.005, Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1004_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1004_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1004_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1004_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0.001, 2730.155, 2671.581]}
          rotation={[0.436, -0.005, Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1005_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1005_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1005_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT1005_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[0, 0, 1123.863]} rotation={[-1.571, -0.491, -1.571]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2003_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2003_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2003_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2003_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[859.425, 0, 0]} rotation={[2.094, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group
          position={[0, 859.425, 0]}
          rotation={[-Math.PI, -Math.PI / 6, -Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2001_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2001_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2001_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2001_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[0, -859.425, 0]} rotation={[0, -Math.PI / 6, -Math.PI / 2]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2002_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2002_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2002_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2002_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <group position={[-1786.6, 0, 0]} rotation={[-2.094, 0, -Math.PI]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2004_Metal_0.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2004_RollingShuttle1_0.geometry}
            material={materials.RollingShuttle1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2004_Non_Metal_0.geometry}
            material={materials.Non_Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PortT2004_Glass_0.geometry}
            material={materials.Glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors_Metal_0.geometry}
          material={materials.Metal}
          position={[540.74, 0, 472.616]}
          rotation={[Math.PI, -Math.PI / 9, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors001_Metal_0.geometry}
          material={materials.Metal}
          position={[540.74, 0, -472.616]}
          rotation={[-2.068, 0.172, -0.305]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors002_Metal_0.geometry}
          material={materials.Metal}
          position={[-1815.052, 0, 0]}
          rotation={[0, 0, Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors003_Metal_0.geometry}
          material={materials.Metal}
          position={[0.001, 945.956, -3730.15]}
          rotation={[-1.658, 1.042, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors004_Metal_0.geometry}
          material={materials.Metal}
          position={[0.001, -2757.427, -2684.299]}
          rotation={[-2.705, 1.042, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors005_Metal_0.geometry}
          material={materials.Metal}
          position={[0.001, -945.959, 3730.15]}
          rotation={[1.484, 1.042, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors006_Metal_0.geometry}
          material={materials.Metal}
          position={[0.001, 2757.427, 2684.299]}
          rotation={[0.436, 1.042, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -2990, 200]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere001_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -2990, -200]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere002_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -2940, -320]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere003_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -2940, 220]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere004_Interior_0.geometry}
          material={materials.Interior}
          position={[830, -2940, 350]}
          rotation={[-Math.PI / 2, 0, 2.618]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere005_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, -2790, -200]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere006_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, -2790, 200]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere007_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, -2760, -200]}
          rotation={[Math.PI, 0, 2.007]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere008_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, -2760, 200]}
          rotation={[Math.PI, 0, 2.007]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere009_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, -2760, 200]}
          rotation={[0, 0, -1.134]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere010_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, -2760, -200]}
          rotation={[0, 0, -1.134]}
          scale={80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere011_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -2489.416, -1668.205]}
          rotation={[-Math.PI / 3, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere012_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -2689.416, -1321.795]}
          rotation={[-Math.PI / 3, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere013_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -2706.115, -1192.871]}
          rotation={[-Math.PI / 3, 0, 0]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere014_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -2436.115, -1660.525]}
          rotation={[-Math.PI / 3, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere015_Interior_0.geometry}
          material={materials.Interior}
          position={[830, -2371.115, -1773.109]}
          rotation={[-Math.PI / 3, 0, -2.583]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere016_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, -2516.211, -1221.795]}
          rotation={[Math.PI / 6, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere017_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, -2316.211, -1568.205]}
          rotation={[Math.PI / 6, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere018_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, -2490.23, -1206.795]}
          rotation={[Math.PI / 6, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere019_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, -2290.23, -1553.205]}
          rotation={[Math.PI / 6, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere020_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, -2290.23, -1553.205]}
          rotation={[-2.618, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere021_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, -2490.23, -1206.795]}
          rotation={[-2.618, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere022_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -2689.416, 1321.796]}
          rotation={[-2.094, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere023_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -2489.416, 1668.205]}
          rotation={[-2.094, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere024_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -2386.114, 1747.129]}
          rotation={[-2.094, 0, 0]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere025_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -2656.115, 1279.475]}
          rotation={[-2.094, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere026_Interior_0.geometry}
          material={materials.Interior}
          position={[830, -2721.115, 1166.892]}
          rotation={[-2.094, 0, -2.583]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere027_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, -2316.21, 1568.206]}
          rotation={[-Math.PI / 6, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere028_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, -2516.211, 1221.795]}
          rotation={[-Math.PI / 6, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere029_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, -2290.23, 1553.205]}
          rotation={[-Math.PI / 6, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere030_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, -2490.23, 1206.795]}
          rotation={[-Math.PI / 6, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere031_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, -2490.23, 1206.795]}
          rotation={[2.618, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere032_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, -2290.23, 1553.205]}
          rotation={[2.618, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere033_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 2489.417, 1668.204]}
          rotation={[2.094, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere034_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 2689.417, 1321.794]}
          rotation={[2.094, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere035_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 2706.115, 1192.871]}
          rotation={[2.094, 0, 0]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere036_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 2436.115, 1660.525]}
          rotation={[2.094, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere037_Interior_0.geometry}
          material={materials.Interior}
          position={[830, 2371.115, 1773.109]}
          rotation={[2.094, 0, -2.583]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere038_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, 2516.211, 1221.794]}
          rotation={[-2.618, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere039_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, 2316.211, 1568.204]}
          rotation={[-2.618, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere040_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, 2490.23, 1206.794]}
          rotation={[-2.618, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere041_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, 2290.23, 1553.205]}
          rotation={[-2.618, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere042_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, 2290.23, 1553.205]}
          rotation={[Math.PI / 6, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere043_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, 2490.23, 1206.794]}
          rotation={[Math.PI / 6, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere044_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 2689.416, -1321.796]}
          rotation={[Math.PI / 3, 0, Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere045_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 2489.416, -1668.206]}
          rotation={[Math.PI / 3, 0, Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere046_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 2386.115, -1747.129]}
          rotation={[Math.PI / 3, 0, 0]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere047_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 2656.115, -1279.475]}
          rotation={[Math.PI / 3, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere048_Interior_0.geometry}
          material={materials.Interior}
          position={[830, 2721.115, -1166.892]}
          rotation={[Math.PI / 3, 0, -2.583]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere049_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, 2316.21, -1568.206]}
          rotation={[2.618, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere050_Interior_0.geometry}
          material={materials.Interior}
          position={[-500, 2516.21, -1221.795]}
          rotation={[2.618, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere051_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, 2290.229, -1553.205]}
          rotation={[2.618, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere052_Interior_0.geometry}
          material={materials.Interior}
          position={[-640, 2490.23, -1206.796]}
          rotation={[2.618, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere053_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, 2490.23, -1206.796]}
          rotation={[-Math.PI / 6, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere054_Interior_0.geometry}
          material={materials.Interior}
          position={[-350, 2290.229, -1553.205]}
          rotation={[-Math.PI / 6, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere055_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 199.999, -2990.001]}
          rotation={[0, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere056_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -200.001, -2990]}
          rotation={[0, 0, -Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere057_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -320.001, -2940]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere058_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 219.999, -2940]}
          rotation={[0, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere059_Interior_0.geometry}
          material={materials.Interior}
          position={[830, 349.999, -2940.001]}
          rotation={[0, 0, -2.583]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere060_Interior_0.geometry}
          material={materials.Interior}
          position={[0, -200.001, -2790]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere061_Interior_0.geometry}
          material={materials.Interior}
          position={[0, 199.999, -2790]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere062_Interior_0.geometry}
          material={materials.Interior}
          position={[-140, -200.001, -2760]}
          rotation={[Math.PI / 2, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere063_Interior_0.geometry}
          material={materials.Interior}
          position={[-140, 199.999, -2760]}
          rotation={[Math.PI / 2, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere064_Interior_0.geometry}
          material={materials.Interior}
          position={[150, 199.999, -2760]}
          rotation={[-Math.PI / 2, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere065_Interior_0.geometry}
          material={materials.Interior}
          position={[150, -200.001, -2760]}
          rotation={[-Math.PI / 2, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere066_Interior_0.geometry}
          material={materials.Interior}
          position={[-139, 0, 2752]}
          rotation={[Math.PI / 2, 0, -2.059]}
          scale={[-90, 90, 90]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere067_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, -160, 3010]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[-90, 90, 90]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere068_Interior_0.geometry}
          material={materials.Interior}
          position={[840, -16, 2712]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[-160, 160, 160]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere069_Interior_0.geometry}
          material={materials.Interior}
          position={[500, -16, 2712]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[-150, 150, 150]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere070_Interior_0.geometry}
          material={materials.Interior}
          position={[1075, 174, 2810]}
          rotation={[-1.571, 0, 0]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere071_Interior_0.geometry}
          material={materials.Interior}
          position={[1075, -206, 2820]}
          rotation={[-1.571, 0, 0]}
          scale={[-110, 110, 110]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere072_Interior_0.geometry}
          material={materials.Interior}
          position={[860, -204.999, 3190]}
          rotation={[Math.PI, 0, 0]}
          scale={[-90, 90, 90]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere073_Interior_0.geometry}
          material={materials.Interior}
          position={[1030, 359.999, 2870]}
          rotation={[Math.PI, 0, 2.251]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere074_Interior_0.geometry}
          material={materials.Interior}
          position={[830, -350.001, 3190]}
          rotation={[-Math.PI, 0, -2.601]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere075_Interior_0.geometry}
          material={materials.Interior}
          position={[630, -469, 3185]}
          rotation={[Math.PI, 0, 1.571]}
          scale={[-40, 40, 40]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere076_Interior_0.geometry}
          material={materials.Interior}
          position={[630, 464, 3185]}
          rotation={[Math.PI, 0, 1.571]}
          scale={40}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere093_Interior_0.geometry}
          material={materials.Interior}
          position={[0, 2790, -200.001]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere094_Interior_0.geometry}
          material={materials.Interior}
          position={[0, 2790, 199.999]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere095_Interior_0.geometry}
          material={materials.Interior}
          position={[-140, 2760, -200.001]}
          rotation={[Math.PI, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere096_Interior_0.geometry}
          material={materials.Interior}
          position={[-140, 2760, 199.999]}
          rotation={[Math.PI, 0, 1.134]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere097_Interior_0.geometry}
          material={materials.Interior}
          position={[150, 2760, 199.999]}
          rotation={[0, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere098_Interior_0.geometry}
          material={materials.Interior}
          position={[150, 2760, -200.001]}
          rotation={[0, 0, -2.007]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere099_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 2990.001, 199.999]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere100_Interior_0.geometry}
          material={materials.Interior}
          position={[-860, 2990, -200.001]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[-100, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere101_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 2940, -320.001]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-80, 80, 80]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere102_Interior_0.geometry}
          material={materials.Interior}
          position={[860, 2940, 219.999]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Interior_Sphere103_Interior_0.geometry}
          material={materials.Interior}
          position={[830, 2940.001, 349.999]}
          rotation={[Math.PI / 2, 0, -2.583]}
          scale={60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring001_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[-2.094, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring002_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[-2.618, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring003_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[-Math.PI, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring004_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[2.618, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring005_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[2.094, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring006_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring007_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[Math.PI / 3, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring008_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[Math.PI / 6, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring009_Tiles_0.geometry}
          material={materials.Tiles}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring010_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[-Math.PI / 6, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ring011_Tiles_0.geometry}
          material={materials.Tiles}
          rotation={[-Math.PI / 3, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/interstellar_endurance_high_fidelity_draco.glb')