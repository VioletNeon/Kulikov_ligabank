import dayjs from 'dayjs';
import {ActionType} from './action';

const initialState = {
  date: dayjs().format('YYYY-MM-DD'),
  currency: [],
  converterHistory: [],
  availableAmount: '',
  desiredAmount: '',
  availableCurrency: 'RUB',
  desiredCurrency: 'USD',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_DATE:
      return {
        ...state,
        date: action.date,
      };
    case ActionType.LOAD_CURRENCY:
      return {
        ...state,
        currency: [action.payload.rates],
      };
    case ActionType.CHANGE_AVAILABLE_AMOUNT:
      return {
        ...state,
        availableAmount: action.payload,
      };
    case ActionType.CHANGE_DESIRED_AMOUNT:
      return {
        ...state,
        desiredAmount: action.payload,
      };
    case ActionType.CHANGE_AVAILABLE_CURRENCY:
      return {
        ...state,
        availableCurrency: action.payload,
      };
    case ActionType.CHANGE_DESIRED_CURRENCY:
      return {
        ...state,
        desiredCurrency: action.payload,
      };
    case ActionType.CHANGE_CONVERTER_HISTORY:
      return {
        ...state,
        converterHistory: [...state.converterHistory, action.payload],
      };
    case ActionType.CLEAR_HISTORY:
      return {
        ...state,
        converterHistory: initialState.converterHistory,
      };
    default:
      return state;
  }
};

export {reducer};
