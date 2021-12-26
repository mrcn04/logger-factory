import { logger } from './factory-class'

function main(): typeof logger {
  logger.info('Logger Factory started')
  return logger
}

main()