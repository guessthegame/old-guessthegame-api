/*
 * Check config.json file
 */
const path = require('path');
const fs = require('fs');

const configPath = path.join(__dirname, '../config/index.js');
if (!fs.existsSync(configPath)) {
  throw new Error(
    `You need to create the ${path.join(__dirname, '../config/index.js')} file from index.js.example`
  );
}

/*
 * Dependencies
 */
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const http = require('http');
const config = require('../config');
const logger = require('./logger');
const loadRoutes = require('./routes/_routes');
const response = require('./response');
const tokenService = require('./services/tokenService');
const crons = require('./crons/crons');

/**
 * Create the app
 */
const app = express();
app.use(cors({
  origin: config.frontUrl,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(bodyParser.json()); // for parsing application/json
app.use(fileUpload());
app.use('/api/uploads', express.static(`${__dirname}/../uploads`));
app.use(tokenService.authenticateMiddleware);

/**
 * Configuring the app
 */
const port = (config.api && config.api.port) || 3001;
app.set('port', port);

/**
 * Adding the routes
 */
loadRoutes(app);

/**
 * Adding the response middleware
 */
app.use(response);

/**
 * Starting the app
 */
const server = http.createServer(app);
server.listen(port, () => {
  const address = server.address();
  logger.info(`API up and running on ${address.address}:${address.port}`);
});

/**
 * Starting the crons
 */
crons.startCrons();
