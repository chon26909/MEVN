const   express = require("express"),
        cors = require("cors"),
        mongoose = require("mongoose"),
        bodyParser = require("body-parser");
        
require("./database");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));;
app.use(cors());

const studentAPI = require("./routes/studeent.route")

app.use("/api", studentAPI);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("server start port ",port);
})

//404 
app.use((req,res,next) => {
    next(createError(404));
})

//Error 
app.use((err,req,res,next) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

