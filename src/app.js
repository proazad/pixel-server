const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
const connectDB = require("./db/connectDB");
const applyMiddleware = require("./middleware/applyMiddleware");
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

applyMiddleware(app);
const postHandler = require("./router/postHandler");
const commentHandler = require("./router/commentHandler");
app.use(postHandler);
app.use(commentHandler);




const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });
}
main();


