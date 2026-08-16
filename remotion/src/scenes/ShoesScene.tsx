import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/PlusJakartaSans";

const { fontFamily } = loadFont("normal", { weights: ["600"] });

export const ShoesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const moveSpring = spring({
    frame,
    fps,
    config: { damping: 20 },
  });

  const imageX = interpolate(moveSpring, [0, 1], [100, 0]);
  const textOpacity = interpolate(frame, [20, 40], [0, 1]);

  return (
    <AbsoluteFill className="flex-row bg-[#0F0F0F]">
      <div className="w-1/2 flex items-center justify-center p-20">
        <div style={{ opacity: textOpacity, fontFamily }} className="text-white">
          <span className="text-[#D4AF37] text-xl uppercase tracking-widest mb-4 block">Collection 2026</span>
          <h2 className="text-7xl font-serif mb-6 leading-tight">Mastering<br/>The Walk</h2>
          <p className="text-white/60 text-xl max-w-md">Crafted with the finest Italian leather, every step is a statement of excellence.</p>
        </div>
      </div>
      <div className="w-1/2 relative overflow-hidden">
        <Img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000"
          style={{ transform: `translateX(${imageX}px)` }}
          className="h-full w-full object-cover"
        />
      </div>
    </AbsoluteFill>
  );
};
