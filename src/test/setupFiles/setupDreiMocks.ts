import { afterAll, beforeAll, vi } from "vitest";

beforeAll(() => {
  vi.mock("@react-three/drei", async () => {
    const mod = await vi.importActual<
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import("@react-three/drei")
    >("@react-three/drei");
    return { ...mod, Text: vi.fn() };
  });
});

afterAll(() => {
  vi.clearAllMocks();
});
