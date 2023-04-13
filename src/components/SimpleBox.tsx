import { type FC, useState } from "react";
import { type ThreeEvent } from "@react-three/fiber";
import { Box, Billboard, Text } from "@react-three/drei";

interface SimpleBoxProps {
  width: number;
  height: number;
  depth: number;
  color: string;
  text: string;
}

const SimpleBox: FC<SimpleBoxProps> = ({
  width,
  height,
  depth,
  color,
  text,
}) => {
  const position: [number, number, number] = [0, height / 2, 0];
  const [hovered, setHovered] = useState(false);
  const onPointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
  };
  const onPointerOut = () => {
    setHovered(false);
  };

  // TODO: If we show the text, the test fails.
  //
  // It will return:
  // Error: Not implemented: HTMLCanvasElement.prototype.getContext (without installing the canvas npm package)
  //
  // If you do install the `canvas` package, this will be the error:
  // WebGL SDF generation not supported: Cannot read properties of null (reading 'canvas')
  const SHOW_TEXT = false;

  return (
    <group>
      <Box
        args={[width, height, depth]}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <meshStandardMaterial color={color} />
      </Box>
      <Billboard
        position={[position[0], position[1] + 0.5, position[2]]}
        visible={hovered}
      >
        {SHOW_TEXT && (
          <Text
            fontSize={1.0}
            color={"#ffffff"}
            outlineColor={"#aaaaaa"}
            outlineWidth={"1%"}
          >
            {text}
          </Text>
        )}
      </Billboard>
    </group>
  );
};

export default SimpleBox;
