import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { loadFont } from "@remotion/google-fonts/PlayfairDisplay";

const { fontFamily } = loadFont("normal", { weights: ["700"] });

export const SplashScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = interpolate(titleSpring, [0, 1], [0.9, 1]);
  const y = interpolate(titleSpring, [0, 1], [40, 0]);

  const seagollOpacity = interpolate(frame, [0, 15], [0, 0.7]);
  const seagollY = interpolate(frame, [0, 15], [-20, 0]);

  return (
    <AbsoluteFill className="items-center justify-center bg-blue-900 text-white">
      <div 
        style={{ 
          backgroundImage: "url('/HOMEM DE FERRO.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.5
        }}
      />
      <div 
        style={{ 
          opacity: seagollOpacity,
          transform: `translateY(${seagollY}px)`,
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: `translateX(-50%) translateY(${seagollY}px)`
        }}
      >
        <img 
          src="/gaivota.webp" 
          alt="Gaivota" 
          className="w-16 h-16"
        />
      </div>
      <div 
        style={{ 
          fontFamily,
          opacity,
          transform: `scale(${scale}) translateY(${y}px)`,
          position: 'relative',
          zIndex: 10
        }}
        className="text-center"
      >
        <h1 className="text-9xl tracking-tighter mb-4 text-green-500">MAJESTADE SEMPRE REINA</h1>
        <div className="h-1 w-32 bg-green-500 mx-auto mb-8" />
        <p className="text-3xl tracking-[0.3em] uppercase text-green-500/80">Aura Luxury</p>
      </div>
    </AbsoluteFill>
  );
};