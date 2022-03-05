import { createElement } from '../../../utils/index.js';

const dictionary = {
  notFound: ['fa-solid', 'fa-question'],
  add: ['fa-regular', 'fa-plus'],
};

export const Icon = (icon, addClasses) => {
  const iconClass = dictionary[icon] || dictionary.notFound;
  const isArray = Array.isArray(addClasses);
  const classes = isArray ? [...iconClass, ...addClasses] : [...iconClass, addClasses];
  const formattedClasses = classes.filter((item) => item);
  return createElement('i', { class: formattedClasses });
};
