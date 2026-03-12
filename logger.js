const pino = require('pino');

// Set up the logger
const logger = pino({
	level: 'info',
	transport: {
		targets: [
			{
				target: 'pino-pretty',
				options: { colorize: false, }
			},
			{
				target: 'pino-roll',
				options: { file: './public/log/combined.txt', mkdir: true, size: '10m', limit: { count: 5 } }
			},
		]
	}
});

module.exports = { logger, };
