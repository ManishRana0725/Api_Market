const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const cookieParser = require("cookie-parser");
require('dotenv').config();

// Routes
const apiListingsRoutes = require('./routes/apiRoutes'); // API listings routes
const homeRoutes = require('./routes/home'); // Home page routes
const userRouter = require('./routes/userRoutes');

// Database Connection
mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/api_market', {
   
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Database Connection Error:", err));

// Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Routes
app.use("/", homeRoutes); // Home page routes
app.use("/api_market", apiListingsRoutes); // API listings routes
app.use("/api_market/users" , userRouter); // API user routes
// Start the Server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


