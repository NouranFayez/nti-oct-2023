const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '123';

bcrypt.hash(myPlaintextPassword, saltRounds)
.then(res=> console.log(res))