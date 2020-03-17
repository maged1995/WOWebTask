export const loadFromLocalStorage = key => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }

  return null;
};

export const addToLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const dropFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export const updateLocalStorage = (key, obj) => {
  const item = localStorage.getItem(key);
  if (!item || JSON.parse(item).length === 0) {
    localStorage.setItem(key, JSON.stringify([{ ...obj, id: 1 }]));
  } else {
    const array = JSON.parse(item);
    const itemId = array[array.length - 1].id + 1;
    array.push({ ...obj, id: itemId });
    localStorage.setItem(key, JSON.stringify(array));
  }
};

export const removeFromLocalStorage = (key, query) => {
  const item = localStorage.getItem(key);
  if (item) {
    const array = JSON.parse(item);
    const modifiedArray = array.filter(el => el.id !== query);
    localStorage.setItem(key, JSON.stringify(modifiedArray));
  }
};
