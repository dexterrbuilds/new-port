import { useEffect, useState, type FormEvent } from 'react';
import { Check, Copy, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { ProjectItem } from './ProjectsSection';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('3D Modeling & Rendering');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@mina3d.studio');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[32px] border border-[#D7E2EA]/25 bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                  Start a project
                </p>
                <h3
                  id="contact-modal-title"
                  className="hero-heading mt-1 text-3xl sm:text-4xl font-black uppercase tracking-tight"
                >
                  Contact Mina
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close contact dialog"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] px-4 py-3">
              <span className="truncate text-sm font-normal text-[#D7E2EA]">
                hello@mina3d.studio
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-[#D7E2EA]/20 bg-[#141414] p-6 text-center">
                <p className="text-lg font-medium uppercase tracking-wide text-[#D7E2EA]">
                  Inquiry received
                </p>
                <p className="mt-2 text-sm font-light text-[#D7E2EA]/75">
                  Thanks, {name}. Mina will review your project brief and reply to {email} shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 cursor-pointer rounded-full border-2 border-[#D7E2EA] px-8 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70">
                    Name
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Kim"
                      className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-3.5 py-2.5 text-sm font-normal text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:border-[#D7E2EA] focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70">
                    Email
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@studio.com"
                      className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-3.5 py-2.5 text-sm font-normal text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:border-[#D7E2EA] focus:outline-none"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70">
                  Service Focus
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-3.5 py-2.5 text-sm font-normal text-[#D7E2EA] focus:border-[#D7E2EA] focus:outline-none"
                  >
                    <option value="3D Modeling & Rendering">3D Modeling &amp; Rendering</option>
                    <option value="Motion Design">Motion Design</option>
                    <option value="Branding">Branding</option>
                    <option value="Web Design">Web Design</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70">
                  Project Brief
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your timeline, goals, and visual direction..."
                    className="resize-none rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-3.5 py-2.5 text-sm font-normal text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:border-[#D7E2EA] focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.01]"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                >
                  <Send className="h-4 w-4" />
                  Send Brief
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export function ProjectModal({ project, onClose, onContactClick }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/40 bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-4xl sm:text-6xl font-black leading-none text-[#D7E2EA] tabular-nums">
                  {project.number}
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                    {project.category}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-medium uppercase tracking-tight text-[#D7E2EA]"
                  >
                    {project.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project preview"
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mb-4 max-w-3xl text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/80">
              {project.summary}
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-normal uppercase tracking-wider text-[#D7E2EA]/60">
              {project.deliverables.map((item, idx) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {idx > 0 && <span aria-hidden="true">&middot;</span>}
                  <span>{item}</span>
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="flex flex-col gap-4 md:col-span-5">
                <img
                  src={project.col1Top}
                  alt={`${project.name} preview 1`}
                  referrerPolicy="no-referrer"
                  className="h-56 w-full rounded-[28px] object-cover bg-[#161616]"
                />
                <img
                  src={project.col1Bottom}
                  alt={`${project.name} preview 2`}
                  referrerPolicy="no-referrer"
                  className="h-64 w-full rounded-[28px] object-cover bg-[#161616]"
                />
              </div>
              <div className="md:col-span-7">
                <img
                  src={project.col2}
                  alt={`${project.name} main render`}
                  referrerPolicy="no-referrer"
                  className="h-full min-h-[280px] w-full rounded-[28px] object-cover bg-[#161616]"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="cursor-pointer rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
              >
                Inquire About Similar Work
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
