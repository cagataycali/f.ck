var bf = require('./index');

bf('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.')
  .then(value => console.log(value))
  .catch(err => console.log(err))
