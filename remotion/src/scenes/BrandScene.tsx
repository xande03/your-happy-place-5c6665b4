import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/PlayfairDisplay";

const { fontFamily } = loadFont("normal", { weights: ["700"] });

export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const finalSpring = spring({
    frame,
    fps,
    config: { damping: 15 },
  });

  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = interpolate(finalSpring, [0, 1], [0.9, 1]);

  return (
    <AbsoluteFill className="items-center justify-center bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_70%)]" />
      </div>
      
      <div 
        style={{ 
          opacity,
          transform: `scale(${scale})`,
          fontFamily
        }}
        className="text-center z-10"
      >
        <h2 className="text-8xl mb-8">AURA</h2>
        <div className="space-y-4">
          <p className="text-2xl tracking-[0.2em] text-[#D4AF37]">EXPERIENCE DISTINCTION</p>
          <p className="text-white/40 text-lg uppercase tracking-widest">aura-luxury.com</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
