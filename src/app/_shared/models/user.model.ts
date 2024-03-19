import { Model } from './model';

export class userResponseModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;

  constructor(objeto?: any) {
    super(objeto);
  }
}
