import { FloatyRect } from "./floatyRect";
import { Canvas } from 'react-three-fiber'

export default function FloatingRects() {
  return (
    <Canvas orthographic gl={{ alpha: true, antialias: true }}>
      <ambientLight />
      <FloatyRect
        relativePosition={[0.75, 0.55]}
        relativeSize={[1.5, 1.1]}
        rotation={[0, 0, 0.2]}
        mass={90}
      />
      <FloatyRect
        relativePosition={[0.65, 0.65]}
        relativeSize={[0.7, 0.7]}
        rotation={[0, 0, 0.5]}
        mass={60}
      />
      <FloatyRect
        relativePosition={[0.75, 0.75]}
        relativeSize={[0.4, 0.4]}
        rotation={[0, 0, 0.15]}
        mass={30}
      />
    </Canvas>
  );
}
