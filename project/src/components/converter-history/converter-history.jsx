import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import HistoryConverterItem from '../history-converter-item/history-converter-item';

const MAX_HISTORY_COUNT = 10;

function ConverterHistory({converterHistory, onClearHistoryClick}) {
  let historyItems = converterHistory;
  if (converterHistory.length > MAX_HISTORY_COUNT) {
    historyItems = converterHistory.sort((a, b) => b.timePoint - a.timePoint).slice(0, MAX_HISTORY_COUNT);
  }

  return (
    <section className="history-section">
      <div className="history-section__wrapper">
        <h3 className="history-section__title">История конвертация</h3>
        <ul className="history-section__list">
          {historyItems.map((item) => <HistoryConverterItem historyData={item} key={item.id}/>)}
        </ul>
        <div className="history-section__wrapper-button">
          <button
            className="history-section__button button"
            type="button"
            onClick={onClearHistoryClick}
          >
            Очистить историю
          </button>
        </div>
      </div>
    </section>
  );
}

ConverterHistory.propTypes = {
  converterHistory: PropTypes.array.isRequired,
  onClearHistoryClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  converterHistory: state.converterHistory,
});

const mapDispatchToProps = (dispatch) => ({
  onClearHistoryClick() {
    dispatch(ActionCreator.clearHistory());
  },
});

export {ConverterHistory};
export default connect(mapStateToProps, mapDispatchToProps)(ConverterHistory);
