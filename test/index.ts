import * as assert from 'power-assert';
import beater from 'beater';
import { SimpleMemoryStorage } from '../src/';

const { test } = beater();

const category = 'MemoryStorage > ';

test(category + 'initial state', () => {
  const storage = new SimpleMemoryStorage();
  assert(storage.length === 0);
  assert(storage.key(0) === null);
  assert(storage.getItem('') === null);
});

test(category + 'add an item', () => {
  const storage = new SimpleMemoryStorage();
  storage.setItem('key1', 'value1');
  assert(storage.length === 1);
  assert(storage.key(0) === 'key1');
  assert(storage.getItem('key1') === 'value1');
});

test(category + 'add 2 items', () => {
  const storage = new SimpleMemoryStorage();
  storage.setItem('key1', 'value1');
  storage.setItem('key2', 'value2');
  assert(storage.length === 2);
  assert(storage.key(0) === 'key1');
  assert(storage.getItem('key1') === 'value1');
  assert(storage.key(1) === 'key2');
  assert(storage.getItem('key2') === 'value2');
});

test(category + 'add 2 items and clear', () => {
  const storage = new SimpleMemoryStorage();
  storage.setItem('key1', 'value1');
  storage.setItem('key2', 'value2');
  storage.clear();
  assert(storage.length === 0);
  assert(storage.key(0) === null);
  assert(storage.getItem('key1') === null);
  assert(storage.key(1) === null);
  assert(storage.getItem('key2') === null);
});

test(category + 'add 2 items and remove an item', () => {
  const storage = new SimpleMemoryStorage();
  storage.setItem('key1', 'value1');
  storage.setItem('key2', 'value2');
  storage.removeItem('key1');
  assert(storage.length === 1);
  assert(storage.key(0) === 'key2');
  assert(storage.getItem('key1') === null);
  assert(storage.getItem('key2') === 'value2');
});

test(category + 'update an item', () => {
  const storage = new SimpleMemoryStorage();
  storage.setItem('key1', 'value1');
  storage.setItem('key1', 'new value');
  assert(storage.length === 1);
  assert(storage.key(0) === 'key1');
  assert(storage.getItem('key1') === 'new value');
});
