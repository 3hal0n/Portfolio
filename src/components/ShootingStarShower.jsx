import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

const ShootingStarShower = ({ 
  starCount = 10, 
  showerInterval = 4000, 
  continuous = true,
  radiantPoint = [2, 6, -2] // Point from which stars appear to radiate
}) => {
  const [activeStars, setActiveStars] = useState([]);
  const starsRef = useRef([]);

  // Generate multiple shooting stars with realistic shower behavior
  const generateShower = () => {
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      // Add random delay between 0-2 seconds for each star in the shower
      const delay = Math.random() * 2000;
      
      // Radiant point simulation - stars appear to come from similar area
      const radiationSpread = 3;
      const startX = radiantPoint[0] + (Math.random() - 0.5) * radiationSpread;
      const startY = radiantPoint[1] + (Math.random() - 0.5) * radiationSpread;
      const startZ = radiantPoint[2] + (Math.random() - 0.5) * radiationSpread;
      
      // End positions spread wide for shower effect
      const endX = startX - Math.random() * 12 - 3;
      const endY = startY - Math.random() * 10 - 2;
      const endZ = startZ - Math.random() * 4 - 1;
      
      // Varying speeds and sizes for realism
      const speed = 0.6 + Math.random() * 0.8; // 0.6 to 1.4
      const size = 0.04 + Math.random() * 0.06; // 0.04 to 0.1
      const brightness = 0.8 + Math.random() * 1.2; // 0.8 to 2.0
      
      newStars.push({
        id: Math.random(),
        startPosition: [startX, startY, startZ],
        endPosition: [endX, endY, endZ],
        speed,
        size,
        brightness,
        delay,
        isActive: false,
        progress: 0,
        startTime: Date.now() + delay
      });
    }
    
    setActiveStars(prev => [...prev, ...newStars]);
  };

  // Initialize shower and set up intervals
  useEffect(() => {
    // Start first shower immediately
    generateShower();
    
    if (continuous) {
      const interval = setInterval(() => {
        generateShower();
      }, showerInterval);
      
      return () => clearInterval(interval);
    }
  }, [starCount, showerInterval, continuous]);

  // Animation frame loop
  useFrame((state, delta) => {
    const currentTime = Date.now();
    
    setActiveStars(prev => {
      return prev.map(star => {
        // Check if star should start
        if (!star.isActive && currentTime >= star.startTime) {
          return { ...star, isActive: true };
        }
        
        // Animate active stars
        if (star.isActive) {
          const newProgress = star.progress + delta * star.speed;
          
          // Remove completed stars
          if (newProgress >= 1) {
            return null;
          }
          
          return { ...star, progress: newProgress };
        }
        
        return star;
      }).filter(Boolean); // Remove null entries
    });
  });

  return (
    <>
      {activeStars.map((star, index) => {
        if (!star.isActive) return null;
        
        return (
          <ShootingStarMesh
            key={star.id}
            star={star}
            ref={el => starsRef.current[index] = el}
          />
        );
      })}
    </>
  );
};

// Individual shooting star mesh component
const ShootingStarMesh = ({ star }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current && star.isActive) {
      // Smooth easing for natural movement
      const eased = 1 - Math.pow(1 - star.progress, 2.5);
      
      // Interpolate position
      const currentPos = [
        THREE.MathUtils.lerp(star.startPosition[0], star.endPosition[0], eased),
        THREE.MathUtils.lerp(star.startPosition[1], star.endPosition[1], eased),
        THREE.MathUtils.lerp(star.startPosition[2], star.endPosition[2], eased)
      ];
      
      meshRef.current.position.set(...currentPos);
      
      // Fade effect: bright in middle, fade at start and end
      const fadeProgress = star.progress;
      let opacity;
      if (fadeProgress < 0.1) {
        opacity = fadeProgress / 0.1; // Fade in
      } else if (fadeProgress > 0.7) {
        opacity = (1 - fadeProgress) / 0.3; // Fade out
      } else {
        opacity = 1; // Full brightness in middle
      }
      
      meshRef.current.material.opacity = opacity;
      meshRef.current.material.emissiveIntensity = opacity * star.brightness;
    }
  });

  return (
    <Trail
      width={0.15 * (star.size * 10)}
      length={8 + star.speed * 4}
      color="#ffffff"
      attenuation={(t) => t * t * t}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[star.size, 6, 6]} />
        <meshBasicMaterial
          color="#ffffff"
          emissive="#8b5cf6"
          emissiveIntensity={star.brightness}
          transparent
          opacity={1}
        />
      </mesh>
    </Trail>
  );
};

export default ShootingStarShower;
