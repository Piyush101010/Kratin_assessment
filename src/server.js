
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

let port = 4000 ;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`);
});