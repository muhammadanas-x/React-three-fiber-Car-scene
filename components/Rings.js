import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';
import { color } from 'three/examples/jsm/nodes/shadernode/ShaderNode';

const Rings = () => {

    const itemRef = useRef([]);

    useFrame((state) => {
        let elapsedTime = state.clock.getElapsedTime();
        for (let i = 0 ; i < itemRef.current.length ; i++)
        {
            let mesh = itemRef.current[i];

            let z = (i - 8) * 2.5  + ((elapsedTime  * 0.4) % 4) * 2;
            mesh.position.set(0,0,-z);

            let dist  = Math.abs(z);


            let colorScale = 0;
            if(dist > 2)
            {
                colorScale = 1 - (Math.min(dist , 12) - 2 )/ 10;
            }
            colorScale *= 0.5;


            mesh.scale.set(1 - dist * 0.04 , 1 - dist * 0.04 , 1 - dist * 0.04);

            if(i % 2 == 0)
            {
                mesh.material.emissive = new Color(6,0.15,0.7).multiplyScalar(colorScale);

            }
            else

            {
                mesh.material.emissive = new Color(0.1,0.7,3).multiplyScalar(colorScale);
            }
        }
    })
  return (

    <>
        {[0,0,0,0,0,0,0,0,0,0,0,0,0].map((v,i) => (
            <mesh
            castShadow
            receiveShadow
            position={[0,0,0]}
            key={i}
            ref={(el) => {itemRef.current[i] = el}}

            >

                <torusGeometry args={[3.35,0.05,16,100]}/>
                <meshStandardMaterial emissive={[0.5,0.5,0.5]} color={[0,0,0]}/>
            </mesh>
        ))}
    </>
  )
}

export default Rings