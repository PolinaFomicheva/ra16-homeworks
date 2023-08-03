import React from "react";
import PropTypes from "prop-types";

export default function NewsItem({ news }) {
  return (
    <div className='news-item'>
      <div className='img-news-item'>
        <img src={news.image} alt={news.id} />
      </div>
      <div className='text-news'>
        <h3>{news.title}</h3>
        <p>{news.content}</p>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};


