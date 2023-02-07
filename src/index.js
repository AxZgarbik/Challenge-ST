const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const v1LeadRouter = require("./v1/routes/leadsRoutes");

app.use("/api/v1/leads",v1LeadRouter)

app.listen(PORT , () => {console.log(`Server listening on port ${PORT}`)})