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

  return (
    <group>
      <Box
        args={[width, height, depth]}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <meshStandardMaterial color={color} />
      </Box>
      {hovered && (
        <Billboard position={[position[0], position[1] + 0.5, position[2]]}>
          <Text
            fontSize={1.0}
            color="#ffffff"
            outlineColor="#aaaaaa"
            outlineWidth="1%"
          >
            {text}
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default SimpleBox;
