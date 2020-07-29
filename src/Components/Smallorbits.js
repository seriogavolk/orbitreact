import React, {
    useMemo,
    useRef,
    useState,
    useEffect,
    useCallback
  } from "react";
  import { random } from "lodash";
  import { useFrame } from "react-three-fiber";
  
  export default () => {
    const mesh = useRef();
    const time = useRef(0);
  
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    const isActiveRef = useRef(isActive);
    const positionZn = random(-30, -10, true);
    const positionZp = random(10, 30, true);
    const positionZ = positionZn + positionZp;
    const positionYn = random(-4, -3, true);
    const positionYp = random(3, 4, true);
    const positionY = positionYn + positionYp;
    const positionXn = random(-50, -0, true);
    const positionXp = random(0, 50, true);
    const positionX = positionXn + positionXp;
    // position
    const position = useMemo(() => {
      return [positionX, positionY, positionZ];
    }, [positionX, positionY, positionZ]);
  
    // random time mod factor
    const timeMod = useMemo(() => random(0.1, 4, true), []);
  
    // color
    const color = isHovered ? 0xe5d54d : (isActive ? 0xf7e7e5 : '#b09d6a');
  
    //useEffect of the activeState
    useEffect(() => {
      isActiveRef.current = isActive;
    }, [isActive]);
  
    // raf loop
    useFrame(() => {
      mesh.current.rotation.y += 0.01 * timeMod;
      if (isActiveRef.current) {
        time.current += 0.03;
        mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4;
      }
    });
  
    // Events
    const onHover = useCallback(
      (e, value) => {
        e.stopPropagation();
        setIsHovered(value);
      },
      [setIsHovered]
    );
  
    const onClick = useCallback(
      e => {
        e.stopPropagation();
        setIsActive(v => !v);
      },
      [setIsActive]
    );
  
    return (
      <mesh
        ref={mesh}
        position={position}
        onClick={e => onClick(e)}
        onPointerOver={e => onHover(e, true)}
        onPointerOut={e => onHover(e, false)}
      >
        <sphereBufferGeometry attach="geometry" args={[0.15, 32, 16]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>
    );
  };