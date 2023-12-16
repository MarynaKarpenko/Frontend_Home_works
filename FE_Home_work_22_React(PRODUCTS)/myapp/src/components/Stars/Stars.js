import { FaRegStar, FaStar } from 'react-icons/fa';
import s from "./Stars.module.css"

export default function Stars({ rating }) {
  const roundedRating = Math.round(rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  }

  return <div className={s.star}>{renderStars()}</div>
}
