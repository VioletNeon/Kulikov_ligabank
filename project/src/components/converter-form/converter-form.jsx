import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import dayjs from 'dayjs';
import {ActionCreator} from '../../store/action';
import {fetchCurrency, fetchCurrentCurrency} from '../../store/api-actions';
import ConverterCurrency from '../converter-currency/converter-currency';
import ConverterDate from '../converter-date/converter-date';

function ConverterForm(props) {
  const {
    date,
    currency,
    desiredAmount,
    availableAmount,
    availableCurrency,
    desiredCurrency,
    onCurrentDateChange,
    onPastDateChange,
    onSaveHistoryClick,
    onAvailableAmountChange,
    onAvailableCurrencySelect,
    onDesiredAmountChange,
    onDesiredCurrencySelect,
  } = props;

  const handleSaveHistoryClick = (evt) => {
    evt.preventDefault();

    const historyData = {
      date,
      availableAmount,
      availableCurrency,
      desiredAmount,
      desiredCurrency,
      timePoint: dayjs().unix(),
      id: nanoid(),
    };

    onSaveHistoryClick(historyData);
  };

  return (
    <section className="converter-section">
      <h2 className="converter-section__title">Конвертер валют</h2>
      <div className="converter-section__container">
        <form className="form" method="post" action="#">
          <fieldset className="converter">
            <legend className="visually-hidden">Конвертация валют</legend>
            <ul className="converter__list">
              <ConverterCurrency
                currency={currency}
                desiredAmount={desiredAmount}
                availableAmount={availableAmount}
                availableCurrency={availableCurrency}
                desiredCurrency={desiredCurrency}
                onAvailableAmountChange={onAvailableAmountChange}
                onAvailableCurrencySelect={onAvailableCurrencySelect}
                onDesiredAmountChange={onDesiredAmountChange}
                onDesiredCurrencySelect={onDesiredCurrencySelect}
              />
            </ul>
          </fieldset>
          <fieldset className="date-setting">
            <legend className="visually-hidden">Введите дату</legend>
            <ul className="date-setting__list">
              <ConverterDate
                date={date}
                onAvailableAmountChange={onAvailableAmountChange}
                onDesiredAmountChange={onDesiredAmountChange}
                onPastDateChange={onPastDateChange}
                onCurrentDateChange={onCurrentDateChange}
              />
            </ul>
          </fieldset>
          <div className="form__wrapper-button">
            <button
              className="form__button button"
              type="submit"
              formAction="#"
              onClick={handleSaveHistoryClick}
            >
              Сохранить результат
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

ConverterForm.propTypes = {
  date: PropTypes.string.isRequired,
  currency: PropTypes.array.isRequired,
  desiredAmount: PropTypes.string.isRequired,
  availableAmount: PropTypes.string.isRequired,
  availableCurrency: PropTypes.string.isRequired,
  desiredCurrency: PropTypes.string.isRequired,
  onCurrentDateChange: PropTypes.func.isRequired,
  onPastDateChange: PropTypes.func.isRequired,
  onSaveHistoryClick: PropTypes.func.isRequired,
  onAvailableAmountChange: PropTypes.func.isRequired,
  onAvailableCurrencySelect: PropTypes.func.isRequired,
  onDesiredAmountChange: PropTypes.func.isRequired,
  onDesiredCurrencySelect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.date,
  availableAmount: state.availableAmount,
  desiredAmount: state.desiredAmount,
  currency: state.currency,
  availableCurrency: state.availableCurrency,
  desiredCurrency: state.desiredCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  onAvailableAmountChange(amount) {
    dispatch(ActionCreator.changeAvailableAmount(amount));
  },
  onDesiredAmountChange(amount) {
    dispatch(ActionCreator.changeDesiredAmount(amount));
  },
  onAvailableCurrencySelect(amount) {
    dispatch(ActionCreator.changeAvailableCurrency(amount));
  },
  onDesiredCurrencySelect(amount) {
    dispatch(ActionCreator.changeDesiredCurrency(amount));
  },
  onPastDateChange(dateUrlPart) {
    dispatch(fetchCurrency(dateUrlPart));
    dispatch(ActionCreator.changeDate(dateUrlPart));
  },
  onCurrentDateChange(dateUrlPart) {
    dispatch(fetchCurrentCurrency());
    dispatch(ActionCreator.changeDate(dateUrlPart));
  },
  onSaveHistoryClick(historyItem) {
    dispatch(ActionCreator.changeConverterHistory(historyItem));
  },
});

export {ConverterForm};
export default connect(mapStateToProps, mapDispatchToProps)(ConverterForm);
