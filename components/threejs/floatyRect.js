import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, PlaneGeometry, Vector2 } from 'three';

export function FloatyRect(props) {
  const mesh = useRef();
  const { mouse, viewport } = useThree();
  const [currentOffset, setCurrentOffset] = useState([0, 0]);
  const [finalOffset, setFinalOffset] = useState([0, 0]);

  const [position] = useState([
    -(viewport.width / 2) + props.relativePosition[0] * viewport.width,
    (viewport.height / 2) - props.relativePosition[1] * viewport.height
  ]);

  const [size] = useState([
    props.relativeSize[0] * viewport.width,
    props.relativeSize[1] * viewport.height
  ]);

  const [mass] = useState(props.mass);

  useFrame(({ mouse }) => {
    setFinalOffset([
      mouse.x * 3000 / mass,
      mouse.y * 3000 / mass
    ]);

    setCurrentOffset([
      currentOffset[0] + (finalOffset[0] - currentOffset[0]) / mass,
      currentOffset[1] + (finalOffset[1] - currentOffset[1]) / mass
    ]); 
  });

  return (
    <mesh 
      {...props}
      ref={mesh}
      position={[position[0] + currentOffset[0], position[1] + currentOffset[1]]}
    >
      <planeGeometry args={size} />
      <meshStandardMaterial color={'white'} opacity={.06} transparent={true}/>
    </mesh>
  );
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}