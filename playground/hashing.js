const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//method 1 - bcryptjs

var password = '123abc';
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$mwEZDeVw0.KP6JOvnojRq.4q4.AVUg3r5zqJWt1L10CyHRdVAxDK6';

bcrypt.compare('123', hashedPassword, (err, res) => {
    console.log(res);
});

//method 2 - jwt
//
// var data = {
//     id: 456
// };
//
// var token = jwt.sign(data, 'somesecret');
// console.log(token);
//
//
// var decoded = jwt.verify(token, 'somesecret');
// console.log('decoded', decoded);

//method 3 - SHA256

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//     id: 456
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
//
//
// token.data.id = 456;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust')
// }
