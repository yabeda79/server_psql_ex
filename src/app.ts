import express from "express";
import logger from "morgan";
import * as path from "path";
// import { Router } from "express";
import cors from 'cors';
import bodyParser from 'body-parser'

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import gamesRouter from './routes/games'
import authRouter from "./routes/auth";
import profRouter from './routes/profile'
// Create Express server
export const app = express();

app.use(cors());
app.options('*', cors());

import {getGames} from './controllers/games'
app.get('/games', getGames)
// app.use('/games', gamesRouter)
// Express configuration
// app.listen(4000,()=>{console.log('afasf')})

// auth
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))

// app.use('/api/auth', require('./routes/auth'))
app.use('/api', gamesRouter)
app.use('/api/auth', authRouter)
app.use('/api/profile', profRouter)


app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);

app.use(express.static('public/images'))

// app.use('/games', gamesRouter)





