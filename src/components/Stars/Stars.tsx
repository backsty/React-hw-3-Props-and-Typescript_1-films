import { FC } from 'react';
import { Star } from '@/components/Star';
import { IStarsProps } from '@/types/stars.types';

export const Stars: FC<IStarsProps> = ({ count = 0 }) => {
  if (!Number.isInteger(count) || count < 1 || count > 5) return null;

  const stars = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((starId) => (
        <Star key={starId} id={starId} />
      ))}
    </ul>
  );
};
