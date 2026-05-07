export type Theme = 'light' | 'dark';

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  function getTheme(): Theme {
    if (typeof document === 'undefined') return 'light';
    const attr = document.documentElement.dataset.theme;
    return attr === 'dark' ? 'dark' : 'light';
  }

  function toggleTheme(): void {
    const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // localStorage unavailable
    }
    const metas = document.querySelectorAll('meta[name="theme-color"]');
    metas.forEach((meta) => {
      const m = meta as HTMLMetaElement;
      if (m.media?.includes('light')) {
        m.content = next === 'light' ? '#F8FAFC' : '#080E1A';
      }
    });
  }

  return { theme: getTheme(), toggleTheme };
}
