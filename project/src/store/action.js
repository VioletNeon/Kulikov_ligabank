const ActionType = {
  CHANGE_DATE: 'changeDate',
  LOAD_CURRENCY: 'loadCurrency',
  CLEAR_HISTORY: 'clearHistory',
  CHANGE_AVAILABLE_AMOUNT: 'changeAvailableAmount',
  CHANGE_DESIRED_AMOUNT: 'changeDesiredAmount',
  CHANGE_AVAILABLE_CURRENCY: 'changeAvailableCurrency',
  CHANGE_DESIRED_CURRENCY: 'changeDesiredCurrency',
  CHANGE_CONVERTER_HISTORY: 'changeConverterHistory',
};

const ActionCreator = {
  changeDate: (date) => ({
    type: ActionType.CHANGE_DATE,
    date,
  }),
  loadCurrency: (payload) => ({
    type: ActionType.LOAD_CURRENCY,
    payload,
  }),
  changeAvailableAmount: (payload) => ({
    type: ActionType.CHANGE_AVAILABLE_AMOUNT,
    payload,
  }),
  changeDesiredAmount: (payload) => ({
    type: ActionType.CHANGE_DESIRED_AMOUNT,
    payload,
  }),
  changeAvailableCurrency: (payload) => ({
    type: ActionType.CHANGE_AVAILABLE_CURRENCY,
    payload,
  }),
  changeDesiredCurrency: (payload) => ({
    type: ActionType.CHANGE_DESIRED_CURRENCY,
    payload,
  }),
  changeConverterHistory: (payload) => ({
    type: ActionType.CHANGE_CONVERTER_HISTORY,
    payload,
  }),
  clearHistory: () => ({
    type: ActionType.CLEAR_HISTORY,
  }),
};

export {ActionType, ActionCreator};
