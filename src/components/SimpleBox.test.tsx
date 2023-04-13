import ReactThreeTestRenderer from "@react-three/test-renderer";
import { test, expect, describe } from "vitest";

import SimpleBox from "./SimpleBox";

describe("SimpleBox", () => {
  test("renders the component", async () => {
    const renderer = await ReactThreeTestRenderer.create(
      <SimpleBox
        width={1}
        height={5}
        depth={1}
        color="#00ff00"
        text="Sample Text"
      />
    );

    const group = renderer.scene.children[0];

    // By default, the group should have 2 children.
    expect(group?.children.length).toBe(2);

    const box = renderer.scene.children[0]?.allChildren[0];
    const billboard = renderer.scene.children[0]?.allChildren[1];

    // By default, the billboard should be hidden.
    expect(billboard?.props.visible).toBe(false);

    // After the pointer is over the box, the billboard should be visible.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await renderer.fireEvent(box!, "onPointerOver");
    expect(billboard?.props.visible).toBe(true);

    // When the pointer is out of the box, the billboard should be hidden.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await renderer.fireEvent(box!, "onPointerOut");
    expect(billboard?.props.visible).toBe(false);
  });
});
