const mongoose = require("mongoose");


function dbConnect() {
    require("dotenv").config()
    mongoose.connect(process.env.DATABASE_URL)

    .then(console.log("Database Connected Successfully"))
    .catch((error) => {
        console.log("Fetching Error in Database");
        console.log(error);
        process.exit(1);
    })
}

module.exports = dbConnect;