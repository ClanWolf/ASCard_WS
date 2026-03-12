const pino = require('pino');

// Set up the logger
const logger = pino({
	level: 'info',
	transport: {
		targets: [
			{
				target: 'pino-pretty',
				options: { colorize: true, }
			},
			{
				target: 'pino-roll',
				options: { file: './public/log/combined-%DATE%.txt', mkdir: true, size: '10m', limit: { count: 5 } }
			},
		]
	}
});

module.exports = { logger, };
