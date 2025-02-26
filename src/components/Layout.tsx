
import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>{children}</main>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 text-primary" />
      </button>
    </div>
  );
};
