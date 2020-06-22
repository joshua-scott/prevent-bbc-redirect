const script = document.createElement('script');
script.innerHTML = `Object.defineProperty(window, 'bbcredirection', { writeable: false })`;
document.documentElement.appendChild(script);
