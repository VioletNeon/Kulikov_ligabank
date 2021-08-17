import React from 'react';
import {Link} from 'react-router-dom';

function PublicPart() {
  return (
    <section className="form-section">
      <h2 className="visually-hidden">Расчёт кредита</h2>
      <div className="form-section__wrapper">
        <div className="form-section__text-wrapper">
          <span className="form-section__title">Лига Банк</span>
          <p className="form-section__text">Кредиты на любой случай</p>
          <Link className="form-section__button" to="#">Рассчитать кредит</Link>
        </div>
        <div className="form-section__img-wrapper">
          <img
            className="form-section__black-card"
            src={'./img/black-card.png'}
            width="335"
            height="228"
            alt="Черная карта банка"
          />
          <img
            className="form-section__white-card"
            src={'./img/white-card.png'}
            width="335"
            height="228"
            alt="Белая карта банка"
          />
        </div>
      </div>
    </section>
  );
}

export default PublicPart;
