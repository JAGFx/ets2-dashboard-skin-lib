import { DateTime } from 'luxon';
import { LogLevel } from 'src/application/logger.type';

const createLine = (
  message: string,
  zone: string,
  level: LogLevel = LogLevel.INFO
): string => {
  const date = DateTime.now();
  return `[ ${date.toString()} ][ ${level} ][ ${zone} ] ${message}`;
};

export const logger = {
  createLine
};
