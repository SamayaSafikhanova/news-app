import React from "react";
import Article from "src/model";
const NewsItem: React.FC<Article> = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{publishedAt.slice(0,10)}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
