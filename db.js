const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://hansithlochana:Tg0PEnTTmX9mOXGB@quiz.6p4ykfg.mongodb.net/?retryWrites=true&w=majority&appName=Quiz';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }

    const Connection = mongoose.connection;

    Connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
    });

    Connection.once('open', () => {
        console.log('MongoDB Connected......');
    });
};

module.exports = connectDB;
