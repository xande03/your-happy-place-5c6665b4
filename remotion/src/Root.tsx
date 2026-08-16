import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import "./style.css";

export const RemotionRoot = () => {
  return (
    <Composition
      id="main"
      component={MainVideo}
      durationInFrames={300} // 10 seconds at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
