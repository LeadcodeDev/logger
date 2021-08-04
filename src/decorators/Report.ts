import { Type } from '../types'

export default function Report (type: Type) {
  return (target: Function) => {
    target.prototype.type = type
  }
}