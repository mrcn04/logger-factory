import { Factory } from './factory-class'

function main(): typeof logger {
  const logger = Factory.getLogger()
  logger.info('Logger Factory started')
  return logger
}

main()