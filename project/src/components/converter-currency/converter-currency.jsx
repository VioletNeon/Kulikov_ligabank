import React from 'react';

const MAX_NUMBER_LENGTH = 7;
const MAX_NUMBER_ROUNDING = 2;

function ConverterCurrency(props) {
  const {
    currency,
    desiredAmount,
    availableAmount,
    availableCurrency,
    desiredCurrency,
    onAvailableAmountChange,
    onAvailableCurrencySelect,
    onDesiredAmountChange,
    onDesiredCurrencySelect
  } = props;

  const [currentCurrency] = currency;

  const countCurrency = (amount, inputCurrency, outputCurrency) => {
    const usdAmount = amount / currentCurrency[inputCurrency];
    return (usdAmount * currentCurrency[outputCurrency]).toFixed(MAX_NUMBER_ROUNDING);
  };

  const validateString = (str) => str.split('-').join('');

  const handleAvailableAmountChange = ({target}) => {
    const number = validateString(target.value).slice(0, MAX_NUMBER_LENGTH);
    onDesiredAmountChange(countCurrency(number, availableCurrency, desiredCurrency));
    onAvailableAmountChange(number);
  };

  const handleAvailableCurrencySelect = ({target}) => {
    onAvailableCurrencySelect(target.value);
    onDesiredAmountChange(countCurrency(availableAmount, target.value, desiredCurrency));
  };

  const handleDesiredAmountChange = ({target}) => {
    const number = validateString(target.value).slice(0, MAX_NUMBER_LENGTH);
    onDesiredAmountChange(number);
    onAvailableAmountChange(countCurrency(number, desiredCurrency, availableCurrency));
  };

  const handleDesiredCurrencySelect = ({target}) => {
    onDesiredCurrencySelect(target.value);
    onAvailableAmountChange(countCurrency(desiredAmount, target.value, availableCurrency));
  };

  return (
    <li className="converter__item">
      <div className="converter__item-wrapper">
        <label className="converter__input-description" htmlFor="input-currency" tabIndex="0">
          У меня есть
          <input
            className="converter__input"
            type="number"
            name="input-currency"
            maxLength={MAX_NUMBER_LENGTH}
            value={availableAmount}
            id="input-currency"
            required
            onChange={handleAvailableAmountChange}
          />
        </label>
        <div className="converter__currency-wrapper">
          <label className="converter__currency-type" htmlFor="select-currency-input" tabIndex="0"/>
          <select
            className="converter__currency-select"
            defaultValue={'RUB'}
            id="select-currency-input"
            size="1"
            name="select-currency-input"
            onChange={handleAvailableCurrencySelect}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
          <span className="converter__arrow-wrapper" tabIndex="0">
            <svg width="18" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1l8 8 8-8" stroke="#1F1E25" strokeWidth="2"/>
            </svg>
          </span>
        </div>
      </div>
      <svg className="converter__arrows" width="56" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 1L3 9l16 8M3 9h50M37 35l16-8-16-8M53 27H3" stroke="#1F1E25" strokeWidth="2"/>
      </svg>
      <div className="converter__item-wrapper">
        <label className="converter__input-description" htmlFor="output-currency" tabIndex="0">
          Хочу приобрести
          <input
            className="converter__input"
            type="number"
            name="input-currency"
            maxLength={MAX_NUMBER_LENGTH}
            value={desiredAmount}
            id="output-currency"
            required
            onChange={handleDesiredAmountChange}
          />
        </label>
        <div className="converter__currency-wrapper">
          <label className="converter__currency-type" htmlFor="select-currency-output" tabIndex="0"/>
          <select
            className="converter__currency-select"
            defaultValue={'USD'}
            id="select-currency-output"
            size="1"
            name="select-currency-output"
            onChange={handleDesiredCurrencySelect}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
          <span className="converter__arrow-wrapper" tabIndex="0">
            <svg width="18" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1l8 8 8-8" stroke="#1F1E25" strokeWidth="2"/>
            </svg>
          </span>
        </div>
      </div>
    </li>
  );
}

export default ConverterCurrency;
