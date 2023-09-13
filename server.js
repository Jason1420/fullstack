import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web'
require('dotenv').config();

const app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));


viewEngine(app);
initWebRoutes(app);

/// PORT undefined => port = 6969
const port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log('Backend NodeJs is running on port', port);
})