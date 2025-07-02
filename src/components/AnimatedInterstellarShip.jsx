import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { InterstellarShip } from "./InterstellarShip";

const AnimatedInterstellarShip = (props) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // Rotate the entire group like a tyre (around the corrected Z-axis)
      groupRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {/* You may need to rotate the ship inside the group to align it correctly */}
      <InterstellarShip {...props} />
    </group>
  );
};

export default AnimatedInterstellarShip;
