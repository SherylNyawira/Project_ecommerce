const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultdb';

const connectDatabase = () => {
    if (!MONGO_URI) {
        console.error("Error: MONGO_URI is not defined.");
        process.exit(1);
    }

    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error.message);
            process.exit(1);
        });
}

module.exports = connectDatabase;