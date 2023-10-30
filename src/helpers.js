export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Get all items from local storage
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// delete item from local storage
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

export const createItem = ({ title, text, content, category, image }) => {
  const newItem = {
    id: crypto.randomUUID(),
    title: title,
    content: content,
    image: image,
    category: category,
    createdAt: Date.now(),
    text: text,
  };
  const existingItems = fetchData("news") ?? [];
  return localStorage.setItem(
    "news",
    JSON.stringify([...existingItems, newItem])
  );
};
