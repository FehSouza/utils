import { createElement } from './src/utils/index.js';
import { Icon } from './src/components/index.js';

const $container = document.querySelector('.container');

const element = createElement('div', {
  class: 'class-value',
  textContent: 'text-content-value',
  children: Icon('add', ['teste1', 'teste2']),
});
$container.appendChild(element);
