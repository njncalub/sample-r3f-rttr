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

    // Expectations:
    //
    // group =
    //    renderer.scene.children[0]
    // Box =
    //    renderer.scene.children[0]?.allChildren[0]
    // Billboard =
    //    renderer.scene.children[0]?.allChildren[1]

    const group = renderer.scene.children[0];

    // By default, the group should have 1 child.
    expect(group?.children.length).toBe(1);

    const box = renderer.scene.children[0]?.allChildren[0];
    expect(box).toBeDefined();

    // TODO: This test is failing.
    // Hovering over the box should update the group's children to 2.
    // https://github.com/pmndrs/react-three-fiber/issues/1354
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await renderer.fireEvent(box!, "onPointerOver");
    expect(group?.children.length).toBe(2);

    const billboard = renderer.scene.children[0]?.allChildren[1];
    expect(billboard).toBeDefined();
  });
});
