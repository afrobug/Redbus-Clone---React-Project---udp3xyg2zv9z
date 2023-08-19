export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };