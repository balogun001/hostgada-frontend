import classNames from 'classnames';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  totalStars?: number;
  ratingValue?: number;
  onRating?: (rating: number) => void;
  readOnly?: boolean;
  className?: string;
}

function StarRating({
  totalStars = 5,
  ratingValue = 0,
  onRating,
  readOnly,
  className,
}: StarRatingProps) {
  const [rating, setRating] = useState(ratingValue);
  const [hover, setHover] = useState(0);

  const handleClick = (star: number) => {
    if (readOnly) return;
    setRating(star);
    if (onRating) onRating(star);
  };

  return (
    <div className={classNames('flex gap-1', className)}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={_}
            size={24}
            className={`transition-all duration-300 ${
              readOnly ? 'cursor-default' : 'cursor-pointer'
            } ${starValue <= (hover || rating) ? 'text-orange-500' : 'text-gray-300'}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => !readOnly && setHover(starValue)}
            onMouseLeave={() => !readOnly && setHover(0)}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
