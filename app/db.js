import storage from 'node-persist';

storage.init();

const find = (id) => (
  storage.getItem(id)
);

const save = (id, data) => (
  storage.setItem(id, data).then(() => ({ id, ...data }))
);

const update = (id, data) => (
  find(id).then(currentData => save(id, { ...currentData, ...data }))
);

export { find, save, update };
