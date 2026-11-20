import { useMemo, type ComponentType, type CSSProperties, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

type SupportedTag = keyof HTMLElementTagNameMap;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: SupportedTag;
  className?: string;
  style?: CSSProperties;
}

type MotionHtmlComponent = ComponentType<HTMLMotionProps<'div'>>;
const motionCache = new Map<SupportedTag, MotionHtmlComponent>();

function getMotionComponent(tag: SupportedTag): MotionHtmlComponent {
  let cached = motionCache.get(tag);
  if (!cached) {
    cached = motion.create(tag) as unknown as MotionHtmlComponent;
    motionCache.set(tag, cached);
  }
  return cached;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionComponent = useMemo(() => getMotionComponent(as), [as]);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
