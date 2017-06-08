import logger from 'winston';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Config from './config';

const config = new Config();

/**
 * global settings
 */
logger.transports.level = config.loglevel;
const port = process.env.PORT || 5000;

/**
 * init app
 */
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

/**
 * provide root route
 */
app.get('/', (req, res) => {
  res.json({
    message: 'hello',
  });
});

/**
 * start app
 */
const server = app.listen(port, () => {
  logger.info(`Example app listening on http://localhost:${port}`);
});

export default server;
