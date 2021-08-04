import BaseLogger from './reports/BaseLogger'
import LoggerManager from './managers/LoggerManager'
import { Type } from './types'

export default class Logger {
  private static manager: LoggerManager = new LoggerManager()
  
  public static send (type: Type, message: string) {
    const logger = this.manager.loggers.find((logger: BaseLogger) => logger.type === type)
    logger!.run(message)
  }
}