import { useEffect, useState } from "react";

/**
 * Splash de abertura no padrão Aura (preto/dourado).
 * Exibido por ~2s e desaparece com fade.
 */
const SplashScreen = ({ duration = 2000 }: { duration?: number }) => {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setHidden(true), duration);
    const t2 = window.setTimeout(() => setGone(true), duration + 700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [duration]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundImage: "url('/HOMEM DE FERRO.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Seagull image as decorative element */}
      <img 
        src="/gaivota.webp" 
        alt="Gaivota" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 opacity-70 animate-pulse"
      />
      
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-6xl tracking-[0.35em] text-green-500 drop-shadow-lg">
          MAJESTADE SEMPRE REINA
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-green-500/60" />
        <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-green-500/70 drop-shadow-md">
          Luxury Leathercraft
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;