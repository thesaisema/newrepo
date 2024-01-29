// /* ******************************************
//  * This server.js file is the primary file of the 
//  * application. It is used to control the project.
//  *******************************************/
// /* ***********************
//  * Require Statements
//  *************************/
// const expressLayouts = require("express-ejs-layouts")

// const express = require("express")
// const env = require("dotenv").config()
// const app = express()
// const static = require("./routes/static")

// /* ***********************
//  * Routes
//  *************************/
// app.set("view engine", "ejs")
// app.use(expressLayouts)
// app.set("layout", "./layouts/layout")

// /* ***********************
//  * Routes
//  *************************/
// app.use(static)

// // Index route
// app.get("/", (req, res) => {
//   res.render("index", {title: "Home"})
// })

// /* ***********************
//  * Local Server Information
//  * Values from .env (environment) file
//  *************************/
// const PORT = process.env.PORT
// const HOST = process.env.HOST

// /* ***********************
//  * Log statement to confirm server operation
//  *************************/
// app.listen(PORT, () => {
//   console.log(`app listening on ${HOST}:${PORT}`)
// });

/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/



// JUST INCASE THIS DOESN'T WORK
/* ***********************
 * Require Statements
 *************************/
// const expressLayouts = require("express-ejs-layouts");
// const express = require("express");
// const dotenv = require("dotenv"); // Changed from "dotenv".config() to "dotenv"
// const app = express();
// const staticRoutes = require("./routes/static"); // Changed from "static" to "staticRoutes"

// /* ***********************
//  * Configuration
//  *************************/
// app.set("view engine", "ejs");
// app.use(expressLayouts);
// app.set("layout", "layouts/layout"); // Adjusted the layout path

// /* ***********************
//  * Routes
//  *************************/
// app.use(staticRoutes); // Changed from "static" to "staticRoutes"

// // Index route
// app.get("/", (req, res) => {
//   res.render("index", { title: "Home" });
// });

// /* ***********************
//  * Local Server Information
//  * Values from .env (environment) file
//  *************************/
// const PORT = process.env.PORT || 5500; // Added a default value for PORT
// const HOST = process.env.HOST || "localhost"; // Added a default value for HOST

// /* ***********************
//  * Log statement to confirm server operation
//  *************************/
// app.listen(PORT, HOST, () => {
//   console.log(`App listening on http://${HOST}:${PORT}`);
//   console.log("Press Ctrl+C to quit.");
// });

// JUST INCASE THIS DOESN'T WORK

const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const staticRoutes = require("./routes/static");

// Load environment variables from .env file
dotenv.config();

// Configuration
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/layout");

// Routes
app.use(staticRoutes);

// Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// Local Server Information
const PORT = process.env.PORT;
const HOST = process.env.HOST; 

// Log statement to confirm server operation
app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

