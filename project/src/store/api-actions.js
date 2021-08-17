import {ActionCreator} from './action';

const PATH_REQUEST_HISTORICAL = '/historical/';
const PATH_REQUEST_LATEST = '/latest';
const AUTHORIZATION_KEY_PART = '?apikey=4ef1d6f17e574672803ea36ce486c79c';
const BASE_REQUESTED_CURRENCY_PART = '&base=USD';
const REQUESTED_CURRENCY = '&symbols=RUB,USD,EUR,GBP,CNY';

const fetchCurrency = (datePart) => (dispatch, _getState, api) => (
  api.get(PATH_REQUEST_HISTORICAL+ datePart + AUTHORIZATION_KEY_PART + BASE_REQUESTED_CURRENCY_PART + REQUESTED_CURRENCY)
    .then(({data}) => {
      dispatch(ActionCreator.loadCurrency(data));
    })
);

const fetchCurrentCurrency = () => (dispatch, _getState, api) => (
  api.get(PATH_REQUEST_LATEST + AUTHORIZATION_KEY_PART + REQUESTED_CURRENCY)
    .then(({data}) => {
      dispatch(ActionCreator.loadCurrency(data));
    })
);

export {fetchCurrency, fetchCurrentCurrency};
