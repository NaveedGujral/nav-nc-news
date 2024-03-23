import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import getArticles from "../utils/getArticles";

const ListAllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError("could not retrieve articles");
      });
  }, []);

  if (isLoading) {
    return (
      <div className="LoadingScreen">
        <h2>loading articles...</h2>
      </div>
    );
  } else if (isError) {
    return (
      <div className="LoadingScreen">
        <h2>{isError}</h2>
      </div>
    );
  } else {
    return (
    <div className="ArticleList">
        <div class="row">
               { articles.map((article) => {
                       return <ArticleCard articleObj={article} key={article.article_id}/>
                   })}
        </div>
      </div>
    );
  }


  
};

export default ListAllArticles;

