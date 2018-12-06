import {Role} from '../enums/role.enum';

/**
 * The user model.
 */
export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public role: Role) {
  }
}
