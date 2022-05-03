
import { User } from "./user.model";


export interface Kick {

  kick(): void;

}
export interface Punt{
  punt(): void;
}

type MaybeError = Error | null | undefined;
type Callback = (err: MaybeError, response: Object) => void;

type Role = Kick & Punt;
export class Player implements Kick, Punt {
  punt(): void {
    throw new Error("Method not implemented.");
  }

  kick(): void {
    console.log('kick');
  }

}

export function getPermission(cb: Callback): void {

  if(cb){
    cb(undefined,{})
  }
}

export function genericSearch<T>(object: T, properties: string[], query: string): boolean {


  getPermission((error, {}) => {

  });

  if (query === '') {
    return true;
  }
  return properties.some((property) => {
    const value = object[property];

    if (typeof value === 'string' || typeof value === 'number') {
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
}
