import { FC, useState } from 'react';
import { Stars } from '@/components/Stars';
import { IMovieCard } from '@/types/movieCard.types';
import LikeIcon from '@/assets/img/like.svg';
import ShareIcon from '@/assets/img/share.svg';

export const MovieCard: FC<IMovieCard> = ({
  title,
  genre,
  rating,
  price,
  image,
  isLiked = false,
}) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className="movie-card">
      <div className="movie-card__image-container">
        <img src={image} alt={title} className="movie-card__image" />
        <span className="movie-card__genre">{genre}</span>
      </div>

      <div className="movie-card__content">
        <div className="movie-card__header">
          <h2 className="movie-card__title">{title}</h2>
          <div className="movie-card__actions">
            <button
              className={`movie-card__like ${liked ? 'movie-card__like--active' : ''}`}
              onClick={() => setLiked(!liked)}
              aria-label="Like movie"
            >
              <img src={LikeIcon} alt="" />
            </button>
            <button className="movie-card__share" aria-label="Share movie">
              <img src={ShareIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="movie-card__rating">
          <Stars count={rating} />
        </div>

        <div className="movie-card__footer">
          <span className="movie-card__price">{price} ₽</span>
          <div className="movie-card__buttons">
            <button className="movie-card__buy">Купить</button>
            <button className="movie-card__details">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};
