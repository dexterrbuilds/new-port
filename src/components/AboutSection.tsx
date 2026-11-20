import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Top-Left: Moon icon */}
      <div className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D moon"
            referrerPolicy="no-referrer"
            className="h-auto w-[120px] sm:w-[160px] md:w-[210px] object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D sculpture"
            referrerPolicy="no-referrer"
            className="h-auto w-[100px] sm:w-[140px] md:w-[180px] object-contain"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D block"
            referrerPolicy="no-referrer"
            className="h-auto w-[120px] sm:w-[160px] md:w-[210px] object-contain"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D shapes"
            referrerPolicy="no-referrer"
            className="h-auto w-[130px] sm:w-[170px] md:w-[220px] object-contain"
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24 text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.2} y={24}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
