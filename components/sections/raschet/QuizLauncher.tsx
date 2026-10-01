'use client';

import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { QUIZ } from '@/content/quiz';

const QuizForm = dynamic(() => import('./QuizForm').then((mod) => mod.QuizForm), {
  loading: () => <p role="status" className="py-8 text-body text-muted">Загрузка квиза…</p>,
});

export function QuizLauncher() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const root = document.documentElement;
    const body = document.body;
    const { scrollX, scrollY } = window;
    const pathname = window.location.pathname;
    const previousMinHeight = root.style.minHeight;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
    };

    root.style.minHeight = `${root.scrollHeight}px`;
    Object.assign(body.style, { position: 'fixed', top: `${-scrollY}px`, left: `${-scrollX}px`, width: '100%' });
    const keepScrollPosition = () => {
      if (window.location.pathname === pathname && (window.scrollX !== scrollX || window.scrollY !== scrollY)) {
        window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
      }
    };
    const preventBackgroundScroll = (event: WheelEvent | TouchEvent) => {
      if (event.target instanceof Node && !dialog.contains(event.target)) event.preventDefault();
    };
    window.addEventListener('scroll', keepScrollPosition);
    document.addEventListener('wheel', preventBackgroundScroll, { passive: false });
    document.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
    dialog.showModal();
    return () => {
      window.removeEventListener('scroll', keepScrollPosition);
      document.removeEventListener('wheel', preventBackgroundScroll);
      document.removeEventListener('touchmove', preventBackgroundScroll);
      dialog.close();
      Object.assign(body.style, previousBodyStyles);
      root.style.minHeight = previousMinHeight;
      if (window.location.pathname === pathname) window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
    };
  }, [open]);

  useEffect(() => {
    if (!open || !closing || !dialogRef.current) return;
    const duration = parseFloat(getComputedStyle(dialogRef.current).animationDuration) * 1000;
    const timer = window.setTimeout(() => setOpen(false), duration + 50);
    return () => window.clearTimeout(timer);
  }, [open, closing]);

  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return;
    const box = event.currentTarget.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) setClosing(true);
  };

  return (
    <>
      <div className="fixed right-4 bottom-4 z-30 hidden md:block">
        <Button onClick={() => setOpen(true)} aria-haspopup="dialog" aria-controls="quiz-modal" className="shadow-[0_4px_14px_rgb(0_0_0/0.2)]">
          Рассчитать проект
        </Button>
      </div>
      <dialog
        ref={dialogRef}
        id="quiz-modal"
        aria-labelledby="quiz-modal-title"
        aria-describedby="quiz-modal-lead"
        aria-modal="true"
        data-closing={closing}
        onCancel={(event) => { event.preventDefault(); setClosing(true); }}
        onClose={() => { setOpen(false); setClosing(false); }}
        onAnimationEnd={(event) => {
          if (closing && event.target === event.currentTarget && event.animationName === 'quiz-modal-out') setOpen(false);
        }}
        onClick={onBackdropClick}
        className="quiz-modal overflow-hidden rounded-lg border border-line bg-surface p-0 text-ink shadow-card-hover"
      >
        <div className="quiz-modal-layout flex flex-col">
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-line p-5 md:px-8 md:py-6">
            <div>
              <h2 id="quiz-modal-title" className="font-display text-h3 font-semibold">{QUIZ.title}</h2>
              <p id="quiz-modal-lead" className="mt-2 text-body text-muted">{QUIZ.lead}</p>
            </div>
            <Button iconOnly variant="ghost" aria-label="Закрыть квиз" onClick={() => setClosing(true)} className="shrink-0">
              <X aria-hidden="true" className="size-icon-lg" />
            </Button>
          </div>
          <div className="quiz-modal-scroll min-h-0 overflow-y-auto p-5 md:p-8">
            {open ? <QuizForm idPrefix="quiz-modal" /> : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
