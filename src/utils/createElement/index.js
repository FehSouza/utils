const addClass = (elem, value) => elem.classList.add(value);
const addClasses = (elem, classes) => elem.classList.add(...classes);
const addChild = (elem, child) => elem.appendChild(child);
const addChildren = (elem, children) => children.forEach((item) => addChild(elem, item));
const addTextContent = (elem, text) => (elem.textContent = text);
const onClick = (elem, evt) => elem.addEventListener('click', evt);
const mouseOver = (elem, evt) => elem.addEventListener('mouseover', evt);
const mouseOut = (elem, evt) => elem.addEventListener('mouseout', evt);
const keyUp = (elem, evt) => elem.addEventListener('keyup', evt);
const onChance = (elem, evt) => elem.addEventListener('change', evt);
const addSetAttribute = (elem, key, value) => elem.setAttribute(key, value);

export const createElement = (type, props) => {
  const elem = document.createElement(type);

  if (props === undefined || props === null) return elem;

  Object.entries(props).forEach(([key, value]) => {
    if (key === 'class' && !Array.isArray(value)) return addClass(elem, value);
    if (key === 'class' && Array.isArray(value)) return addClasses(elem, value);
    if (key === 'children' && !Array.isArray(value)) return addChild(elem, value);
    if (key === 'children' && Array.isArray(value)) return addChildren(elem, value);
    if (key.toLowerCase() === 'textcontent') return addTextContent(elem, value);
    if (key.toLowerCase() === 'onclick') return onClick(elem, value);
    if (key.toLowerCase() === 'mouseover') return mouseOver(elem, value);
    if (key.toLowerCase() === 'mouseout') return mouseOut(elem, value);
    if (key.toLowerCase() === 'keyup') return keyUp(elem, value);
    if (key.toLowerCase() === 'onchange') return onChance(elem, value);
    return addSetAttribute(elem, key, value);
  });

  return elem;
};
