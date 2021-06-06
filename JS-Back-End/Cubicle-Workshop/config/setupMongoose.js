const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb+srv://milko00:1m23m554mffds4@cluster0.h1cvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Db Connected'));
}
