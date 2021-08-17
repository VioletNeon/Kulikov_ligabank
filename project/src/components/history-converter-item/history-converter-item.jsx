import React from 'react';

function HistoryConverterItem({historyData}) {
  const {
    date,
    availableAmount,
    availableCurrency,
    desiredAmount,
    desiredCurrency
  } = historyData;

  return (
    <li className="history-section__item">
      <span className="history-section__date history-text">{date}</span>
      <div className="history-section__converted-currency-wrapper">
        <span className="history-section__input-currency history-text">{`${availableAmount} ${availableCurrency}`}</span>
        <svg className="history-section__arrow" width="41" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.2 17L40 9 27.2 1M40 9H0" stroke="#1F1E25"/>
        </svg>
        <span className="history-section__output-currency history-text">{`${desiredAmount} ${desiredCurrency}`}</span>
      </div>
    </li>
  );
}

export default HistoryConverterItem;
