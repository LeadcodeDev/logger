import { DateTime } from 'luxon'
import { Color } from '../types'
import Report from '../decorators/Report'
import BaseLogger from './BaseLogger'

@Report('error')
export default class Info implements BaseLogger {
  public run (message: string): void {
    const currentTime = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
    process.stdout.write(`${Color.Dim}[${currentTime}] ${`${Color.Reset + Color.Red}Error${Color.Reset}`} : ${Color.White + message + Color.Reset}\n`)
  }
}