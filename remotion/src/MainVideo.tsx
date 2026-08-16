import { TransitionSeries, springTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill } from "remotion";
import { HeroScene } from "./scenes/HeroScene";
import { ShoesScene } from "./scenes/ShoesScene";
import { BagsScene } from "./scenes/BagsScene";
import { BrandScene } from "./scenes/BrandScene";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill className="bg-[#0A0A0A]">
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={75}>
          <HeroScene />
        </TransitionSeries.Sequence>
        
        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-bottom' })}
          timing={springTiming({ config: { damping: 20 }, durationInFrames: 15 })}
        />
        
        <TransitionSeries.Sequence durationInFrames={75}>
          <ShoesScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 20 }, durationInFrames: 15 })}
        />

        <TransitionSeries.Sequence durationInFrames={75}>
          <BagsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-right' })}
          timing={springTiming({ config: { damping: 20 }, durationInFrames: 15 })}
        />

        <TransitionSeries.Sequence durationInFrames={90}>
          <BrandScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
