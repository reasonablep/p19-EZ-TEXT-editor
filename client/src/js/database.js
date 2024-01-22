import { openDB } from 'idb';

// Initiate indexedDB database

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// 

export const putDb = async (content) => {
  const db = await openDB('jate', '1');
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const results = await request;
  console.log('Data added to the DB', results.value);
}

// Get DB data from IndexedDB

export const getDb = async () => {
  const db = await openDB('jate', '1');
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const results = await request;
  if (results) {
    console.log('Database found');
    return results.value;
  } else {
    console.log('Data not found');
  }
}

initdb();
