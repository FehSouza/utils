import { createElement } from '../index.js';

export const importCSS = (path) => {
  const $head = document.querySelector('head');

  if (path.includes('pages/')) {
    const $link = createElement('link', { rel: 'stylesheet', href: `./src/${path}/styles.css` });
    return $head.appendChild($link);
  }
  if (path.includes('shared/')) {
    const $link = createElement('link', { rel: 'stylesheet', href: `./src/components/${path}/styles.css` });
    return $head.appendChild($link);
  }
  if (path.includes('modals/')) {
    const $link = createElement('link', { rel: 'stylesheet', href: `./src/components/${path}/styles.css` });
    return $head.appendChild($link);
  }
  if (path.includes('/')) {
    const $link = createElement('link', { rel: 'stylesheet', href: path });
    return $head.appendChild($link);
  }

  const $link = createElement('link', { rel: 'stylesheet', href: `./src/components/${path}/styles.css` });
  return $head.appendChild($link);
};
