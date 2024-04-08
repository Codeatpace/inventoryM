const mongoose = require('mongoose')

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://AmanSharma:12345AmanSakshi@cluster0.o37himt.mongodb.net/Project0?retryWrites=true&w=majority');
        console.log("connected");
    } catch (err) {
        console.log('error connecting to MongoDB Atlas:', err);
    }
};
module.exports = mongoDB()