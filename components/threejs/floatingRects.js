import { useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';

export default function Default(props) {
  return (
    <Canvas orthographic gl={{ alpha: true, antialias: true }}>
      <ambientLight />
      <FloatingRects
        rects={[
          {
            relativePosition: [0.8, 0.5],
            relativeSize: [1.5, 1.2],
            rotation: [0, 0, 0.2],
            mass: 90,
          },
          {
            relativePosition: [0.7, 0.7],
            relativeSize: [0.9, 0.9],
            rotation: [0, 0, 0.5],
            mass: 40,
          },
          {
            relativePosition: [0.75, 0.75],
            relativeSize: [0.5, 0.5],
            rotation: [0, 0, 0.15],
            mass: 60,
          },
        ]}
      />
    </Canvas>
  );
}

function FloatingRects(props) {
  const { mouse, viewport } = useThree();

  const [prepRect] = useState(() => (rect) => {
    rect.size = [
      rect.relativeSize[0] * viewport.width,
      rect.relativeSize[1] * viewport.height,
    ];
  });

  const [animationTime, setAnimationTime] = useState(0);
  const [baseRects] = useState(props.rects);
  const [currentRects] = useState(props.rects);

  useFrame(({ mouse }) => {
    baseRects.forEach((rect, i) => {
      if (animationTime == 0) {
        currentRects[i].currentOffset = [0, 0];
        currentRects[i].targetOffset = [0, 0];
      }
      if (animationTime % 5 == 0) {
        currentRects[i].targetOffset = [
          (mouse.x * 3000) / rect.mass,
          (mouse.y * 3000) / rect.mass,
        ];
      }

      const distance = [
        currentRects[i].targetOffset[0] - currentRects[i].currentOffset[0],
        currentRects[i].targetOffset[1] - currentRects[i].currentOffset[1],
      ];

      currentRects[i].currentOffset = [
        currentRects[i].currentOffset[0] + distance[0] / rect.mass,
        currentRects[i].currentOffset[1] + distance[1] / rect.mass,
      ];

      currentRects[i].position = [
        -(viewport.width / 2) +
          rect.relativePosition[0] * viewport.width +
          currentRects[i].currentOffset[0],
        viewport.height / 2 -
          rect.relativePosition[1] * viewport.height +
          currentRects[i].currentOffset[1],
      ];

      currentRects[i].size = [
        rect.relativeSize[0] * viewport.width,
        rect.relativeSize[1] * viewport.height,
      ];
    });
    setAnimationTime(animationTime + 1);
  });

  return (
    <>
      {currentRects.map((rect) => {
        return (
          <mesh position={rect.position} rotation={rect.rotation}>
            <planeGeometry args={rect.size} />
            <meshStandardMaterial
              color={'white'}
              opacity={0.06}
              transparent={true}
            />
          </mesh>
        );
      })}
    </>
  );
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
