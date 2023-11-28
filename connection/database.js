import mongoose from 'mongoose'
import "dotenv/config";

// Connect to MongoDB
// mongoose.connect(`mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.igo9yec.mongodb.net/?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })



function connectionHost(dbUser, dbPass, dbHost, dbName){
if(dbUser && dbPass){
    return `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`
}else{
return 'mongodb://127.0.0.1:27017/catalogueInventory'
}
}


const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

let connection = connectionHost(dbUser, dbPass, dbHost, dbName);

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });