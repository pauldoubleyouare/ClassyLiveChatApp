'use strict';

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

const { PORT } = require('./config');

const app = express();

//Static webserver
app.use(express.static('public'));

//Parse request body
app.use(express.json());

/*TODO:
- Add Routes && Protected rputes
- Add custom error handler
*/

let server;

function runServer() {}

function closeServer() {}

