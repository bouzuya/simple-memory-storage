// https://html.spec.whatwg.org/multipage/webstorage.html#the-storage-interface
export interface Storage {
  clear(): void;
  getItem(key: string): string | null;
  key(n: number): string | null;
  readonly length: number;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
};
