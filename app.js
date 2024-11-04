const express = require("express");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongodb");
const {authRoute,categoryRoute,fileRoute}=require("./routes")
const morgan=require('morgan')
const {errorHandler}=require('./middlewares')
const notfound=require('./controllers/notfound')

//init app
const app = express();

//connect mongodb
connectMongodb();

//third party middleware
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(morgan("dev"))

//route section
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/file',fileRoute)

//not found route
app.use('*',notfound )

//error handler
app.use(errorHandler)

module.exports = app;
