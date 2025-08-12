import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Billboard } from '@react-three/drei';
import * as THREE from 'three';

const MeteorShower = ({ 
  intensity = 'medium', // 'light', 'medium', 'heavy'
  direction = 'northeast' // Direction of meteor shower
}) => {
  const [meteors, setMeteors] = useState([]);
  
  // Configuration based on intensity
  const config = useMemo(() => {
    const configs = {
      light: { count: 3, interval: 6000, duration: 8000 },
      medium: { count: 8, interval: 4000, duration: 12000 },
      heavy: { count: 15, interval: 2500, duration: 15000 }
    };
    return configs[intensity] || configs.medium;
  }, [intensity]);

  // Direction vectors for different shower directions
  const directionVectors = useMemo(() => {
    const vectors = {
      northeast: { start: [6, 8, -2], direction: [-1, -1, -0.3] },
      northwest: { start: [-6, 8, -2], direction: [1, -1, -0.3] },
      east: { start: [8, 6, -2], direction: [-1, -0.7, -0.3] },
      west: { start: [-8, 6, -2], direction: [1, -0.7, -0.3] }
    };
    return vectors[direction] || vectors.northeast;
  }, [direction]);

  const spawnMeteorBatch = () => {
    const newMeteors = [];
    const baseTime = Date.now();
    
    for (let i = 0; i < config.count; i++) {
      // Stagger spawn times within a 3-second window
      const spawnDelay = Math.random() * 3000;
      
      // Random spread around the radiant point
      const spread = 4;
      const startPos = [
        directionVectors.start[0] + (Math.random() - 0.5) * spread,
        directionVectors.start[1] + (Math.random() - 0.5) * spread,
        directionVectors.start[2] + (Math.random() - 0.5) * spread
      ];
      
      // Calculate end position based on direction with some randomness
      const distance = 15 + Math.random() * 10;
      const endPos = [
        startPos[0] + directionVectors.direction[0] * distance + (Math.random() - 0.5) * 2,
        startPos[1] + directionVectors.direction[1] * distance + (Math.random() - 0.5) * 2,
        startPos[2] + directionVectors.direction[2] * distance + (Math.random() - 0.5) * 1
      ];
      
      newMeteors.push({
        id: `meteor_${baseTime}_${i}`,
        startPos,
        endPos,
        spawnTime: baseTime + spawnDelay,
        speed: 0.8 + Math.random() * 1.0,
        size: 0.03 + Math.random() * 0.05,
        brightness: 1.0 + Math.random() * 1.5,
        color: ['#ffffff', '#e0e7ff', '#c7d2fe'][Math.floor(Math.random() * 3)],
        isActive: false,
        progress: 0
      });
    }
    
    setMeteors(prev => [...prev.filter(m => m.progress < 1), ...newMeteors]);
  };

  useEffect(() => {
    // Initial batch
    spawnMeteorBatch();
    
    // Continuous batches
    const interval = setInterval(spawnMeteorBatch, config.interval);
    
    // Cleanup old meteors periodically
    const cleanup = setInterval(() => {
      setMeteors(prev => prev.filter(m => Date.now() - m.spawnTime < config.duration));
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, [config]);

  useFrame((state, delta) => {
    const currentTime = Date.now();
    
    setMeteors(prev => prev.map(meteor => {
      // Activate meteor if it's time
      if (!meteor.isActive && currentTime >= meteor.spawnTime) {
        return { ...meteor, isActive: true };
      }
      
      // Animate active meteors
      if (meteor.isActive) {
        const newProgress = Math.min(meteor.progress + delta * meteor.speed, 1);
        return { ...meteor, progress: newProgress };
      }
      
      return meteor;
    }));
  });

  return (
    <>
      {meteors.map(meteor => {
        if (!meteor.isActive || meteor.progress >= 1) return null;
        
        return (
          <MeteorMesh key={meteor.id} meteor={meteor} />
        );
      })}
    </>
  );
};

const MeteorMesh = ({ meteor }) => {
  const meshRef = useRef();
  const glowRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      // Position interpolation with easing
      const eased = meteor.progress < 0.7 
        ? meteor.progress / 0.7 
        : 1 - ((meteor.progress - 0.7) / 0.3) * 0.2; // Slight deceleration
      
      const pos = [
        THREE.MathUtils.lerp(meteor.startPos[0], meteor.endPos[0], eased),
        THREE.MathUtils.lerp(meteor.startPos[1], meteor.endPos[1], eased),
        THREE.MathUtils.lerp(meteor.startPos[2], meteor.endPos[2], eased)
      ];
      
      meshRef.current.position.set(...pos);
      
      // Opacity and intensity based on progress
      let opacity = 1;
      if (meteor.progress < 0.1) {
        opacity = meteor.progress / 0.1;
      } else if (meteor.progress > 0.8) {
        opacity = (1 - meteor.progress) / 0.2;
      }
      
      meshRef.current.material.opacity = opacity;
      meshRef.current.material.emissiveIntensity = opacity * meteor.brightness;
      
      if (glowRef.current) {
        glowRef.current.position.set(...pos);
        glowRef.current.material.opacity = opacity * 0.3;
      }
    }
  });

  return (
    <>
      <Trail
        width={0.12 + meteor.size * 2}
        length={10 + meteor.speed * 5}
        color={meteor.color}
        attenuation={(t) => t * t * t * t}
      >
        <mesh ref={meshRef}>
          <sphereGeometry args={[meteor.size, 8, 8]} />
          <meshBasicMaterial
            color={meteor.color}
            emissive="#7c3aed"
            emissiveIntensity={meteor.brightness}
            transparent
            opacity={1}
          />
        </mesh>
      </Trail>
      
      {/* Glow effect */}
      <Billboard ref={glowRef}>
        <mesh>
          <planeGeometry args={[meteor.size * 8, meteor.size * 8]} />
          <meshBasicMaterial
            color={meteor.color}
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Billboard>
    </>
  );
};

export default MeteorShower;
