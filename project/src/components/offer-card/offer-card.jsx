import React from 'react';
import {Link} from 'react-router-dom';
import offerCardProp from './offer-card.prop';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';

function CardOffer(props) {
  const {offer, cardHoverHandler} = props;
  const history = useHistory();
  const {
    isPremium,
    previewImage,
    price,
    title,
    isFavorite,
    rating,
    type,
    id,
  } = offer;
  return (
    <article className="cities__place-card place-card" onMouseOver={() => cardHoverHandler(id)}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/:${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} onClick={() => history.push(AppRoute.FAVORITES)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating)*20}%`}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

CardOffer.propTypes = {
  offer: offerCardProp,
  cardHoverHandler: PropTypes.func,
};

export default CardOffer;
