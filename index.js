// create server
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000
// Middleware
app.use(express.json());

const blogRoutes = require('./routes/blogRoute');
app.use('/api/v1',blogRoutes);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT, () => {
    console.log(`Server Started Successfully at Port No : ${PORT}`);
})

app.get('/', (req,res) => {
    res.send(`<h1> THIS IS HOME PAGE </h1>`)
})