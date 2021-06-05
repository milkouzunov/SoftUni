const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb+srv://milko00:RqhfVMAjT1w2HerC@cluster0.rteqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Db Connected'));
}
