const mongoose = require('mongoose');
const connect = async () => {  
    try {
        await mongoose.connect('mongodb://localhost:27017/ln_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`Connect database success`);
    } catch (error) {
        console.log(`Connect database fail`);
    }
};

module.exports = {connect};