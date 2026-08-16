import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/PlayfairDisplay";

const { fontFamily } = loadFont("normal", { weights: ["700"] });

export const HeroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const y = interpolate(titleSpring, [0, 1], [50, 0]);

  return (
    <AbsoluteFill className="items-center justify-center bg-[#0A0A0A] text-white">
      <div 
        style={{ 
          fontFamily,
          opacity,
          transform: `scale(${scale}) translateY(${y}px)`
        }}
        className="text-center"
      >
        <h1 className="text-9xl tracking-tighter mb-4">AURA</h1>
        <div className="h-1 w-32 bg-[#D4AF37] mx-auto mb-8" />
        <p className="text-3xl tracking-[0.3em] uppercase text-[#D4AF37]/80">Luxury Leathercraft</p>
      </div>
    </AbsoluteFill>
  );
};
