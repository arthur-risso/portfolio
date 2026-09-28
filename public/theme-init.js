(function () {
  var stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch {
    // storage bloqueado: cai para a preferência do sistema
  }
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = stored === 'dark' || stored === 'light' ? stored === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', isDark);

  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isDark ? '#5b8dc4' : '#1e3a5f');
})();
