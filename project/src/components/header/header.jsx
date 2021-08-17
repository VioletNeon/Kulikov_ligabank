import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__logo-wrapper">
          <Link className="page-logo" to="#">
            <img className="page-logo__image" src={'img/logo.svg'} width="28" height="25" alt="Лига банк" />
            <img className="page-logo__text" src={'img/logo-text.svg'} width="112" height="14" alt="Лига банк" />
          </Link>
        </div>
        <nav className="main-nav">
          <div className="main-nav__wrapper">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">Услуги</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">Рассчитать кредит</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link main-nav__link--active" to="#">Конвертер валют</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">Контакты</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="#">Задать вопрос</Link>
              </li>
            </ul>
          </div>
          <Link className="main-nav__log-button" type="button" to="#">
            <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.2 14.3h2.2v5.5h13.4V2.2H4.4v5.5H2.2V1.1c0-.3.1-.6.3-.8.3-.2.5-.3.8-.3H19c.3 0 .6.1.8.3.2.2.3.5.3.8v19.8c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3H3.3c-.3 0-.5-.1-.8-.3a1 1 0 01-.3-.8v-6.6zM9 9.9V6.6l5.5 4.4L9 15.4v-3.3H0V9.9h8.9z"
                fill="#1F1E25"
              />
            </svg>
            <span>Войти в Интернет-банк</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
