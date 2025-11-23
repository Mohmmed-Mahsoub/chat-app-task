export const createElement = (tag, className, content = "") => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
};

export const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
  return parent;
};
