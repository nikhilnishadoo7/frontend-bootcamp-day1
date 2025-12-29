const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routes = require('./routes/route')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, {
   
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
app.use("/api", routes);

app.listen(PORT,()=>{
    console.log(`server is runing ${PORT}  `)
})