import _ from 'lodash';

import { ParamValue } from './../models/param-value.model';

export class SearchParamsMixin {
  public searchParams!: Array<ParamValue>;

  public setParamValues(key: string, value: string, canRepeat?: boolean): any {
    if (!canRepeat) {
      this.searchParams = this.searchParams.filter((obj) => {
        return obj.key !== key;
      });
    }

    if (!_.isEmpty(key) && !_.isEmpty(value)) {
      const searchParam = new ParamValue({ key, value });
      this.searchParams.push(searchParam);
    }
  }
}
