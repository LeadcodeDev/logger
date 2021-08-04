import InfoReport from '../reports/InfoReport'
import SuccessReport from '../reports/SuccessReport'
import ErrorReport from '../reports/ErrorReport'
import WarnReport from '../reports/WarnReport'
import DefaultReport from '../reports/DefaultReport'

export default class LoggerManager {
  public loggers = [
    new InfoReport(),
    new SuccessReport(),
    new ErrorReport(),
    new WarnReport(),
    new DefaultReport(),
  ]
}