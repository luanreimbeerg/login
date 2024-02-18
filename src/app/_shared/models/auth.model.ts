import { Model } from './model';

export class requestAuthModel extends Model {
  username!: string;
  password!: number;

  constructor(objeto?: any) {
    super(objeto);
  }
}

export class responseAuthModel extends Model {
  access_token!: string;

  constructor(objeto?: any) {
    super(objeto);
  }
}
