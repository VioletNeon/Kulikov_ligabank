import React from 'react';
import dayjs from 'dayjs';

function ConverterDate(props) {
  const {
    date,
    onCurrentDateChange,
    onPastDateChange,
    onAvailableAmountChange,
    onDesiredAmountChange
  } = props;

  const currentDate = dayjs().format('YYYY-MM-DD');

  const handleInputDateChange = ({target}) => {
    onDesiredAmountChange(0);
    onAvailableAmountChange(0);

    if (!target.value) {
      return
    } else if (target.value !== currentDate) {
      onPastDateChange(target.value);
      return
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
        id="date-setting-calendar"
        required
        onChange={handleInputDateChange}
      />
    </li>
  );
}

export default ConverterDate;
