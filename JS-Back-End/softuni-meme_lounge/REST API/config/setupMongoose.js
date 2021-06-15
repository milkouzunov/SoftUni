const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost/meme-lounge', { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('DB Connected');
    });
}