interface ILogger {
  info(str: string): void;
  debug(str: string): void;
  warn(str: string): void;
  error(str: string): void;
  log(...args: any[]): void;
}

class ProductionLogger implements ILogger {
  log(...args: any[]): void {}
  info(str: string): void {}
  debug(str: string): void {}
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

class DevelopmentLogger implements ILogger {
  log(...args: any[]): void {
    console.log(...args)
  }
  info(str: string): void {
    console.info(str);
  }
  debug(str: string): void {
    console.debug(str);
  }
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

class Factory {
  static getLogger(): ILogger {
    return new (
      process.env.NODE_ENV === 'production' 
      ? ProductionLogger
      : DevelopmentLogger
    )
  }
}

export const logger = Factory.getLogger()
