import { Magnet } from './Magnet';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
}

export function LiveProjectButton({ onClick, className = '' }: LiveProjectButtonProps) {
  return (
    <Magnet padding={45} strength={3.5}>
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-[#D7E2EA] ${className}`}
      >
        Live Project
      </button>
    </Magnet>
  );
}
