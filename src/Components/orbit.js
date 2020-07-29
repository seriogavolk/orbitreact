import React, {useRef, useState} from 'react'; 
import * as THREE from 'three';
import '../App.css';
import { Canvas, useFrame} from 'react-three-fiber'; 
import { OrbitControls, softShadows, Stars} from 'drei';
import {useSpring, a} from 'react-spring/three';
import Blue from '../blue.jpg';
import Venus from '../venus.jpg';
import Smallorbits from './Smallorbits';
import Grouporbit from './Grouporbit';


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

function Orbit() {

  return (
    <>
    <div className='canva'>
      <Canvas  shadowMap colorManagement camera={{position: [-10, 20, 30], fov: 60}}>
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
       <Sphere 
         position={[0, 1, 0]} 
         args={[1.5, 32, 16, 100]}
         rotationee={0.001}  
         
         map={Venus}
         /> 
          {/* <Sphere 
         position={[-2, 1, -5]} 
          args={[0.5, 32, 16, 100]} 
          rotationee={0.004}
          map={Blue}
          />  */}

       </group>

       <Stars 
       count={15000}
         fade
       />
    
       <Grouporbit />
        
        <OrbitControls
        autoRotate
        autoRotateSpeed={-0.2}
        

    
        />
      </Canvas>
      </div>
    </>
  );
}

export default Orbit;
