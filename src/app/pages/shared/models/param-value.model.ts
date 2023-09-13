import { Model } from './model';

export class ParamValue extends Model {
  public key!: string;
  public value!: any;

  constructor(objeto?: any) {
    super(objeto);
  }
}
