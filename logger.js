/**
 * ASCard Webservice
 * Winston Logger
 */

// Examples for logging
// ---------------------------------------
// logger.log({ level: 'info', message: 'Pass an object and this works', additional: 'properties', are: 'passed along' });
// logger.info({ message: 'Use a helper method if you want', additional: 'properties', are: 'passed along' });
// logger.log('info', 'Pass a message and this works', { additional: 'properties', are: 'passed along' });
// logger.info('Use a helper method if you want', { additional: 'properties', are: 'passed along' });
// logger.log('info', 'test message %s', 'my string');
// logger.log('info', 'test message %d', 123);
// logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });
// logger.info('Found %s at %s', 'error', new Date());
// logger.info('Found %s at %s', 'error', new Error('chill winston'));
// logger.info('Found %s at %s', 'error', /WUT/);
// logger.info('Found %s at %s', 'error', true);
// logger.info('Found %s at %s', 'error', 100.00);
// logger.info('Found %s at %s', 'error', ['1, 2, 3']);
// logger.warn(new Error('Error passed as info'));
// logger.log('error', new Error('Error passed as message'));
// logger.warn('Maybe important error: ', new Error('Error passed as meta'));
// logger.log('error', 'Important error: ', new Error('Error passed as meta'));
// logger.error(new Error('Error as info'));

const winston = require("winston");
require("winston-daily-rotate-file");

const fileRotateCombinedTransport = new winston.transports.DailyRotateFile({
  filename: "./public/log/combined-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  level: "info",
  maxFiles: "14d",
});

const fileRotateErrorTransport = new winston.transports.DailyRotateFile({
  filename: "./public/log/error-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  level: "error",
  maxFiles: "7d",
});

const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({
      format: "YYYYMMDD HH:mm:ss",
    }),
    format.align(),
    format.splat(),
    format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  defaultMeta: { service: "ascard-service" },
  transports: [
    new winston.transports.Console({ level: "debug" }),
    fileRotateCombinedTransport,
    fileRotateErrorTransport,
  ],
});

module.exports = {
  logger,
};
