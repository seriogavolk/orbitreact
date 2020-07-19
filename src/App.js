import React, {useRef, useState, useEffect} from 'react'; 

// import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame} from 'react-three-fiber';
import { OrbitControls, softShadows, MeshWobbleMaterial, Sky, Stars} from 'drei';
import {useSpring, a} from 'react-spring/three';



softShadows();

const Box = ({position, color, args, rotationee, speed, factor})=> {
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
  <boxBufferGeometry attach='geometry' args={args} />
  <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={factor} />
</a.mesh>
);
}

function App() {


  return (
    <>
      <Canvas className='canva' shadowMap colorManagement camera={{position: [-5, 10, 20], fov: 60}}>
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
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <shadowMaterial attach='material' opacity={0.3} /> */}
       </mesh>
       <Box 
         position={[0, 1, 0]} 
         color='rgba(255, 0, 0, 0.5)' 
         args={[2, 2, 2]}
         rotationee={0.009}  
         speed={0.5}
         factor={1}
         /> 
         <Box 
         position={[-2, 1, -5]}
          color='rgba(60, 255, 0, 0.5)' 
          args={[0.5, 1.5, 0.5]} 
          rotationee={0.004}
          speed={1.5}
          factor={1}
          /> 
         <Box 
         position={[5, 1, -1]} 
         color='rgba(0, 140, 10, 0.5)' 
         args={[0.5, 1.5, 0.5]} 
         rotationee={0.004}
         speed={1}
          factor={0.4}
         /> 
          <Box 
         position={[3, 5, -6]} 
         color='rgba(0, 140, 10, 0.5)' 
         args={[0.5, 1.5, 0.5]} 
         rotationee={0.004}
         speed={2}
          factor={2}
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

export default App;
