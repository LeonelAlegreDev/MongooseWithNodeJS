const mongoose = require('mongoose');

const db = module.exports = () => {
    const conectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.set('strictQuery', true);
        mongoose.connect('mongodb+srv://leo:3fsf6PS3WU9OBr8u@cluster0.ki0p1if.mongodb.net/users', conectionParams);
        console.log('DB connected');
    }
    catch(error){
        console.log(error);
        console.log('Failed to connect DB');
    }
}
db();


