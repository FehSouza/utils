import { createElement } from '../index.js';

export const importCSS = (path) => {
  const $link = createElement('link', { rel: 'stylesheet', href: `./src/${path}/styles.css` });
  const $head = document.querySelector('head');
  $head.appendChild($link);
};
