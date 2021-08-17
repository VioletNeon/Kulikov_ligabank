import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const MAX_DAY_DIFFERENCE = 7;

function ConverterDate(props) {
  const {
    date,
    onCurrentDateChange,
    onPastDateChange,
    onAvailableAmountChange,
    onDesiredAmountChange,
  } = props;

  const currentDate = dayjs().format('YYYY-MM-DD');
  const weekAgoDate = dayjs().subtract(MAX_DAY_DIFFERENCE, 'day').format('YYYY-MM-DD');

  const handleInputDateChange = ({target}) => {
    onDesiredAmountChange(0);
    onAvailableAmountChange(0);

    if (!target.value) {
      return;
    } else if (target.value !== currentDate) {
      onPastDateChange(target.value);
      return;
    }
    onCurrentDateChange(target.value);
  };

  return (
    <li className="date-setting__item">
      <label
        className="date-setting__input-description"
        htmlFor="date-setting-calendar"
        tabIndex="0"
      />
      <input
        className="date-setting__input"
        type="date"
        name="date-setting-calendar"
        value={date}
        max={currentDate}
        min={weekAgoDate}
        id="date-setting-calendar"
        required
        onChange={handleInputDateChange}
      />
      <svg className="date-setting__icon" width="41" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 14.2h39M8 1v9.7M33 1v10M40 40V9a3 3 0 00-3-3H4a3 3 0 00-3 3v31a3 3 0 003 3h33a3 3 0 003-3z" stroke="#000"/>
        <path d="M5 19h3M12 19h3M19.2 19h3M26.3 19h3M33.4 19h3M5 25h3M12 25h3M19.2 25h3M26.3 25h3M33.4 25h3M5 31h3M12 31h3M19.2 31h3M26.3 31h3M33.4 31h3M5 37h3M12 37h3M19.2 37h3M26.3 37h3M33.4 37h3" stroke="#2C36F2" strokeWidth="3"/>
      </svg>
    </li>
  );
}

ConverterDate.propTypes = {
  date: PropTypes.string.isRequired,
  onAvailableAmountChange: PropTypes.func.isRequired,
  onCurrentDateChange: PropTypes.func.isRequired,
  onDesiredAmountChange: PropTypes.func.isRequired,
  onPastDateChange: PropTypes.func.isRequired,
};

export default ConverterDate;
