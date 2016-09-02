import { Storage } from './storage';

export class SimpleMemoryStorage implements Storage {
  private _keys: string[];
  private _memory: { [key: string]: string; };

  constructor() {
    this._keys = [];
    this._memory = {};
  }

  get length(): number {
    return this._keys.length;
  }

  clear(): void {
    // NOTE: no event support
    this._memory = {};
    this._keys = [];
  }

  getItem(key: string): string | null {
    return this._memory.hasOwnProperty(key) ? this._memory[key] : null;
  }

  key(n: number): string | null {
    const key: string | undefined = this._keys[n];
    return typeof key === 'undefined' ? null : key;
  }

  removeItem(key: string): void {
    // NOTE: no event support
    delete this._memory[key];
    const index = this._keys.indexOf(key);
    if (index < 0) return;
    this._keys.splice(index, 1);
  }

  setItem(key: string, value: string): void {
    // NOTE: no event support
    this._memory[key] = value;
    if (this._keys.indexOf(key) < 0) {
      this._keys.push(key);
    }
  }
}
