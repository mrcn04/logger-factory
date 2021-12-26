import { logger } from '../src/index'

function logEverything(): void {
  logger.info("Info text"),
  logger.debug("Debug text"),
  logger.warn("Warn text"),
  logger.error("Error text"),
  logger.log('Log text with multiple values', 1)
}

test('logs all five', () => {
  const info = jest.spyOn(console, 'info');
  const debug = jest.spyOn(console, 'debug');
  const warn = jest.spyOn(console, 'warn');
  const error = jest.spyOn(console, 'error');
  const log = jest.spyOn(console, 'log');
  logEverything()
  expect(info).toHaveBeenCalled()
  expect(debug).toHaveBeenCalled()
  expect(warn).toHaveBeenCalled()
  expect(error).toHaveBeenCalled()
  expect(log).toHaveBeenCalled()
})


