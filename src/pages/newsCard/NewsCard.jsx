import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const {
    id,
    author,
    category_id,
    details,
    image_url,
    others_info,
    rating,
    thumbnail_url,
    title,
    total_view,
    _id,
  } = aNews;
  return (
    <div className="card bg-base-100 p-3 my-2 border-2 rounded-2xl shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link className="text-indigo-600" to={`news/${_id}`}>
              See More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  id: PropTypes.string,
  author: PropTypes.object,
  category_id: PropTypes.string,
  details: PropTypes.object,
  image_url: PropTypes.string,
  others_info: PropTypes.object,
  rating: PropTypes.object,
  thumbnail_url: PropTypes.string,
  title: PropTypes.string,
  total_view: PropTypes.number,
  _id: PropTypes.string,
};

export default NewsCard;
