// CRUD queries with mongooseconst
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b471faeb12c0c11d543b37a1';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// //
// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));


// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Unable to find todo');
//     }
//
//     console.log(JSON.stringify(todo, undefined, 2));
// }, (e) => {
//     console.log(e);
// });

var id = '6b462996a871510ce531adbb';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}


User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
