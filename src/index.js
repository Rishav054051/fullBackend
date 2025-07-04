// require('dotenv').config({path:'./env'});

import dotenv from 'dotenv';
dotenv.config()

import connectDB from './db/index.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
    
})




// approach 1: Using async/await with try/catch
// const app = express();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.error("Error connecting to MongoDB:", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
        
//     }
// })()