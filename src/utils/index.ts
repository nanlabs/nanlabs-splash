export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const range = (start = 0, stop = 0, step = 1) =>
  Array(Math.ceil((stop - start) / step) + 1)
    .fill(start)
    .map((x, y) => x + y * step);

export const changeCustomProperty = (property: string, value: string, element = document.documentElement) => {
  element.style.setProperty(property, value);
};

export const changeTheme = (theme: 'dark' | 'light') => {
  document.documentElement.setAttribute('data-theme', theme);
};
