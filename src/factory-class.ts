import { ILogger } from "./interfaces";

class ProductionLogger implements ILogger {
  log(...args: any[]): void {}
  info<T>(msg: T): void {}
  debug<T>(msg: T): void {}
  warn<T>(msg: T): void {
    console.warn(msg);
  }
  error<T>(msg: T): void {
    console.error(msg);
  }
}

class DevelopmentLogger implements ILogger {
  log(...args: any[]): void {
    console.log(...args)
  }
  info<T>(msg: T): void {
    console.info(msg);
  }
  debug<T>(msg: T): void {
    console.debug(msg);
  }
  warn<T>(msg: T): void {
    console.warn(msg);
  }
  error<T>(msg: T): void {
    console.error(msg);
  }
}

export class Factory {
  static getLogger(): ILogger {
    return new (
      process.env.NODE_ENV === 'production' 
      ? ProductionLogger
      : DevelopmentLogger
    )
  }
}
