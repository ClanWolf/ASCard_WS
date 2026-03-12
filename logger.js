const pino = require('pino');

// Set up the logger
const logger = pino({
	level: 'info',
	transport: {
		targets: [
			{
				target: 'pino-pretty',
				options: { colorize: true, }
				level: 'info',
			},
			{
				target: 'pino-roll',
				options: { file: './public/log/combined-%DATE%.txt', mkdir: true, size: '10m', limit: { count: 5 } }
				level: 'info',
			},
			{
				target: 'pino-roll',
				options: { file: './public/log/error-%DATE%.txt', mkdir: true, size: '10m', limit: { count: 5 } }
				level: 'info',
			},
		]
	}
});

module.exports = { logger, };
