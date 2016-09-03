# simple-memory-storage

A Web storage using JavaScript object.

## Installation

```
$ npm install simple-memory-storage
```

## Usage

```ts
import { SimpleMemoryStorage } from 'simple-memory-storage';

const storage = new SimpleMemoryStorage();
storage.setItem('key1', 'value1');
console.log(storage.length); // 1
console.log(storage.key(0)); // 'key1'
console.log(storage.getItem('key1')); // 'value1'

storage.setItem('key2', 'value2');
console.log(storage.length); // 2
console.log(storage.key(1)); // 'key2'
console.log(storage.getItem('key2')); // 'value2'

storage.setItem('key1', 'value1 updated');
console.log(storage.getItem('key1')); // 'value1 updated'

storage.removeItem('key2');
console.log(storage.length); // 1
console.log(storage.getItem('key2')); // null

storage.clear();
console.log(storage.length); // 0
```

See: [test/](test)

## Badges

[![NPM][npm-badge]][npm]
[![Travis CI][travis-ci-badge]][travis-ci]

[npm-badge]: https://img.shields.io/npm/v/simple-memory-storage.svg
[npm]: https://www.npmjs.com/package/simple-memory-storage

[travis-ci-badge]: https://img.shields.io/travis/bouzuya/simple-memory-storage.svg
[travis-ci]: https://travis-ci.org/bouzuya/simple-memory-storage

## License

[MIT](LICENSE)

## Related Project

- [bouzuya/cookie-storage][]

[bouzuya/cookie-storage]: https://github.com/bouzuya/cookie-storage

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
