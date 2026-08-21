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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 text-center">
        <h1 className="font-serif text-5xl md:text-6xl tracking-[0.35em] text-gold">
          AURA
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-gold/60" />
        <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-gold/70">
          Luxury Leathercraft
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
