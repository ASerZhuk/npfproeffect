import type { ReactNode } from 'react';
import { QuizLauncher } from '@/components/sections/raschet/QuizLauncher';
import { Footer } from './Footer';
import { Header } from './Header';

/** Header + <main id="main"> + Footer. Каждая страница оборачивается в PageShell. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <QuizLauncher />
    </>
  );
}
