import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './theme-context';

function getInitialTheme(): Theme {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem('theme');
  } catch {
    // storage bloqueado: cai para a preferência do sistema
  }
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    // Kept in sync with the .dark class: no CSS media query drives this tag, so it must
    // follow the in-page toggle rather than only the OS preference (see theme-init.js).
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#5b8dc4' : '#1e3a5f');

    try {
      localStorage.setItem('theme', theme);
    } catch {
      // storage bloqueado: o tema só não persiste entre visitas
    }
  }, [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add('theme-changing');
    window.setTimeout(() => root.classList.remove('theme-changing'), 350);
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
