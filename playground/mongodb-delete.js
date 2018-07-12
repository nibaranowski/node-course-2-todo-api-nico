//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // //deleteMany
    // db.collection('Users').deleteMany({name: 'Nicolas Baranowski'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne (delete only first item matching)
    db.collection('Users').deleteOne({
        _id: new ObjectID('5b45b3511ca33009d2b52da1')
    }).then((result) => {
        console.log(result);
    });

    // //fineOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // });

    // client.close();
});
