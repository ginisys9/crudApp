import ContactRoutes from "./routes/contact.routes.js"
import express from "express"
import { connectDb } from "./config/database.js";
const PORT = process.env.PORT
const app = express();
connectDb()


// middleware
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
/**
 * ! Routes
 */
app.use("/",ContactRoutes)
app.listen(PORT, () => console.log(`server started Successfull on port ${PORT}`));