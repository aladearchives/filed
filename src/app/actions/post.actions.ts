import {Action} from '@ngrx/store';
import {UserDto} from '../dto/user-dto';

export const CREATE_USER = '[Post] Edit';
export const RESET = '[Post] Reset';

export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: UserDto) {
  }
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = CreateUser
  | Reset;
