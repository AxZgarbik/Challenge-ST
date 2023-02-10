const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3200;
const v1DealerRouter = require("./v1/routes/dealerRoutes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/",v1DealerRouter)

app.listen(PORT , () => {console.log(`Server listening on port ${PORT}`)})