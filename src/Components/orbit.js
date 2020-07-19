import React, {useRef, useState} from 'react'; 
import * as THREE from 'three';
// import logo from './logo.svg';
import '../App.css';
import { Canvas, useFrame} from 'react-three-fiber'; 
import { OrbitControls, softShadows, Stars} from 'drei';
import {useSpring, a} from 'react-spring/three';
import Blue from '../blue.jpg';
import Venus from '../venus.jpg';



softShadows();



const Sphere = ({position, color, args, rotationee, speed, factor, map})=> {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(map);
  const mesh = useRef(null);
  useFrame(() => (
    mesh.current.rotation.x =
    mesh.current.rotation.y -= rotationee
    ));
    
 

    //Defining the state

    const [expand, setExpand] = useState(false);
 
    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    });

    
return (
  <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} castShadow position={position} ref={mesh}>
    <sphereBufferGeometry attach='geometry' args={args} />
    <meshStandardMaterial attach='material' map={texture} color={color} speed={speed} factor={factor} /> 
  </a.mesh>
);
}
//https://codesandbox.io/s/alligatordemoreact-three-fiber-0zlu6?file=/src/components/Cubes/index.js
function Orbit() {

  return (
    <>
      <Canvas className='canva' shadowMap colorManagement camera={{position: [-5, 10, 20], fov: 80}}>
      <ambientLight intensity={0.4} />
      <directionalLight 
        castShadow
        position={[0, 10, 0]}
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0 , -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5}/>

     
         
        <group>
        {/* <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach='geometry' args={[25, 25]}/>
        <shadowMaterial attach='material' opacity={0.3} />
       </mesh> */}
       <Sphere 
         position={[0, 1, 0]} 
         args={[1.5, 32, 16, 100]}
         rotationee={0.003}  
         
         map={Venus}
         /> 
          <Sphere 
         position={[-2, 1, -5]} 
          args={[0.5, 32, 16, 100]} 
          rotationee={0.004}
          map={Blue}
          /> 

       </group>

       <Stars 
       count={20000}
         fade
       />
        
        <OrbitControls
        autoRotate
        autoRotateSpeed={0.1}

    
        />
      </Canvas>
    </>
  );
}

export default Orbit;
