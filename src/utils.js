import {isNil, round} from 'lodash';
import Intl from 'intl';
import 'intl/locale-data/jsonp/en';

const roundUtil = val => {
  if (isNil(val)) {
    return val;
  }
  return round(val, 2);
};

export const currencyFormat = val => {
  const x = roundUtil(val);
  if (isNil(x)) {
    return x;
  }
  return Intl.NumberFormat('en-IN').format(x);
};
