import { useEffect, useRef, useState } from 'react';

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_ONE = MARQUEE_IMAGES.slice(0, 11);
const ROW_TWO = MARQUEE_IMAGES.slice(11);

const ROW_ONE_TRIPLED = [...ROW_ONE, ...ROW_ONE, ...ROW_ONE];
const ROW_TWO_TRIPLED = [...ROW_TWO, ...ROW_TWO, ...ROW_TWO];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateOffset = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Motion showcase reel"
      className="overflow-hidden bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: moves RIGHT on scroll */}
        <div className="w-max -translate-x-1/3">
          <div
            className="flex gap-3"
            style={{
              transform: `translateX(${offset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {ROW_ONE_TRIPLED.map((src, idx) => (
              <div
                key={`r1-${idx}`}
                className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl bg-[#161616]"
              >
                <img
                  src={src}
                  alt={`3D and motion preview ${(idx % ROW_ONE.length) + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-[270px] w-[420px] rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div className="w-max -translate-x-1/3">
          <div
            className="flex gap-3"
            style={{
              transform: `translateX(${-(offset - 200)}px)`,
              willChange: 'transform',
            }}
          >
            {ROW_TWO_TRIPLED.map((src, idx) => (
              <div
                key={`r2-${idx}`}
                className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl bg-[#161616]"
              >
                <img
                  src={src}
                  alt={`3D and motion preview ${(idx % ROW_TWO.length) + 12}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-[270px] w-[420px] rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
