# Install

In terminal,
```bash
$>_ npm i --save f.ck
```

# Usage

```javascript
const f = require('f.ck');

f('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.')
  .then(value => console.log(value))
  .catch(err => console.log(err))

  /*
  $ yarn test || npm run test
  H
  e
  l
  l
  o

  W
  o
  r
  l
  d
  !
  */
```
