import { useFrame } from '@react-three/fiber';
import { userAgent } from 'next/server';
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
const MyRings = () => {
    
    const rings = useRef([]);
    const group = useRef();

    useFrame((state) => {
        let elapsedTime = state.clock.getElapsedTime();
        for(let i = 0 ; i < rings.current.length ; i++)
        {
            let mesh = rings.current[i];
    
            let x = (i - 4) * 3.5 + elapsedTime ;
    
            let dist = Math.abs(x);
        
            mesh.position.set(x % 15 - 10.5, 0 , 0);
            dist = Math.abs(x * 0.01);
            mesh.scale.set(1 - dist * 0.03 , 1 - dist * 0.03 , 1 - dist * 0.03 ); 
            dist = Math.abs(x * 0.1);
            let colorScale = 0;
            
            if(dist > 2 )
            {
                colorScale = dist / 12;
            }

           
               

    
    
    
    
            
            if(i % 2 == 0)
            {
                mesh.material.emissive = new THREE.Color(10,10,10).multiplyScalar(colorScale);
    
            }
            else
    
            {
                mesh.material.emissive = new THREE.Color(0.1,0.1,0.1).multiplyScalar(colorScale);
            }
        }
      
    })
   

  
    return (
        <>
        <group ref={group}>
        {[0,0,0,0,0,0,0].map((v,i) => (
                <mesh 
                key={i}
                castShadow
                receiveShadow
                ref={(el) => {rings.current[i] = el}}
                rotation={[0  , -Math.PI / 2, 0]} 
                >
                    <torusGeometry args={[3.35 , 0.05 ,  64 , 64]}/>
                    <meshStandardMaterial emissive={[0.5,0.5,0.5]}/>
                </mesh>
            ))}
        </group>
            


    
        </>
  )
}

export default MyRings