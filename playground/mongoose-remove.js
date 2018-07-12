// CRUD queries with mongooseconst
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove
// Todo.remove({}).then((results => {
//     console.log(results);
// }))

//Todo.findOneAndRemove

Todo.findByIdAndRemove({_id: '5b476ff25e11cd170baa0866'}).then((todo) => {
    console.log(todo);
});


//Todo.findByIdAndRemove
//
// Todo.findByIdAndRemove('5b476fed5e11cd170baa0865').then((todo) => {
//     console.log(todo);
// });
