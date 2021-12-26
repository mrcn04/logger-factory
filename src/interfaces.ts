export interface ILogger {
  info(str: string): void;
  debug(str: string): void;
  warn(str: string): void;
  error(str: string): void;
  log(...args: any[]): void;
}