export default abstract class BaseLogger {
  abstract type?: string
  public abstract run (message: string): void
}