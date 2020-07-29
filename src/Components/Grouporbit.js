import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Smallorbits from "./Smallorbits";

export default () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  const nodesCubes = map(new Array(200), (el, i) => {
    return <Smallorbits key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};
