import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/PlusJakartaSans";

const { fontFamily } = loadFont("normal", { weights: ["600"] });

export const BagsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoomSpring = spring({
    frame,
    fps,
    config: { damping: 25 },
  });

  const scale = interpolate(zoomSpring, [0, 1], [1.2, 1]);
  const textY = interpolate(frame, [15, 35], [30, 0]);
  const textOpacity = interpolate(frame, [15, 35], [0, 1]);

  return (
    <AbsoluteFill className="bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <Img 
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1920"
          style={{ transform: `scale(${scale})` }}
          className="h-full w-full object-cover opacity-60"
        />
      </div>
      <AbsoluteFill className="items-center justify-end pb-32 bg-gradient-to-t from-black via-transparent to-transparent">
        <div 
          style={{ 
            opacity: textOpacity, 
            transform: `translateY(${textY}px)`,
            fontFamily
          }} 
          className="text-center text-white"
        >
          <h2 className="text-8xl font-serif mb-4">Timeless Carry</h2>
          <p className="text-[#D4AF37] text-2xl uppercase tracking-[0.5em]">Executive Series</p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
