import { type NextPage } from "next";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { OrbitControls } from "@react-three/drei";

import SimpleBox from "~/components/SimpleBox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>sample-r3f-rttr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <Canvas
          resize={{ polyfill: ResizeObserver }}
          data-testid="titanic-grids-canvas"
        >
          <OrbitControls target={[0, 0, 0]} />
          <ambientLight />
          <SimpleBox
            width={1}
            height={6}
            depth={1}
            color="#00ff00"
            text="Sample Text"
          />
        </Canvas>
      </main>
    </>
  );
};

export default Home;
