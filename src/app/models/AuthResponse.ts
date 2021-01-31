import {User} from './User';

export class AuthResponse {
  code: number;
  message: string;
  result: User;
}
