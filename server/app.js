const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//routes
const user = require("./routes/userRoute");
const css = require("./routes/CSSRoute");

app.use("/api/v1", user);
app.use("/api/v1", css);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;
