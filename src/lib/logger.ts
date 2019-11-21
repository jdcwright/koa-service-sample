import winston from 'winston';
import { LOG_LEVEL } from '../config';

const {
    combine,
    colorize,
    timestamp,
    printf
} = winston.format;
const formatter = printf(info => `${info.timestamp} [${info.level}]: ${info.message}`);

const localConsole = new winston.transports.Console({
    format: combine(
        timestamp(),
        colorize(),
        formatter
    ),
});

export default winston.createLogger({
    level: LOG_LEVEL,
    transports: [
        localConsole
    ]
});
