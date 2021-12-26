import { Factory } from './factory-class'

function main(): typeof logger {
  logger.info('Logger Factory started')
  return logger
}

export const logger = Factory.getLogger()
main()
