export interface ILogger {
  info<T>(msg: T): void;
  debug<T>(msg: T): void;
  warn<T>(msg: T): void;
  error<T>(msg: T): void;
  log(...args: any[]): void;
}