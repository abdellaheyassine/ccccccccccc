import { Type } from './Type'

export class Compte{
  constructor(
    public id?: number,
    public login?: string,
    public password?: string,
    public type?: any
  )
  {
    
  }
}
