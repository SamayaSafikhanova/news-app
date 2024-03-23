import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Article from "src/model";
const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCatagory, setSelectedCatagory] = useState("changelog");
  const [selectedDate, setSelectedDate] = useState("newest");
  const [search, setSearch] = useState("");
  const catagoryOptions = [
    { value: "changelog", label: "Changelog" },
    { value: "football", label: "Football" },
    { value: "tips", label: "Tips & How-tos" },
    { value: "research", label: "Research" },
  ];
  const dateOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];
  const handleCatagoryChange = (value: string) => {
    setSelectedCatagory(value);
  };
  const handleSorting = (value: string) => {
    setSelectedDate(value);
  };
  useEffect(() => {
    const getArticles = async () => {
      try {
        const apiKey = "ef4494455a8a4d759df28fc5a5dd7263";
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${selectedCatagory}&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    getArticles();
  }, [selectedCatagory]);

  const filteredArticles = articles
    .filter((article) => {
      return article.title.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      return selectedDate === "newest"
        ? new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        : new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    });

  return (
    <div>
      <h1>My News App</h1>
      <div className="filter_search">
        <div className="news-catagory">
          {catagoryOptions.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                name={option.value}
                checked={selectedCatagory === option.value}
                onChange={() => handleCatagoryChange(option.value)}
              />

              <label
                key={option.value}
                htmlFor={option.value}
                onClick={() => setSelectedCatagory(option.value)}
                className={
                  selectedCatagory === option.value ? "active-filter" : ""
                }
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className="news-catagory">
          {dateOptions.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                name={option.value}
                checked={selectedDate === option.value}
                onChange={() => handleSorting(option.value)}
              />

              <label
                key={option.value}
                htmlFor={option.value}
                onClick={() => setSelectedDate(option.value)}
                className={selectedDate === option.value ? "active-filter" : ""}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className="news-search">
          <input
            id="search"
            placeholder="Search news..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="news-app">
        {filteredArticles.length == 0 ? (
          <div className="blog-notfaund">
            <h1>No items found for your search.</h1>
          </div>
        ) : (
          filteredArticles.map((article, index) => {
            return (
              <NewsItem
                publishedAt={article.publishedAt}
                key={index}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewsList;
