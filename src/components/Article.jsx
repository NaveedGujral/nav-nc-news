import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import getSingleArticle from "../utils/getSingleArticle";
import ListArticleComments from "./ListArticleComments";

import ArticleVoter from "./ArticleVoter";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError("could not retrieve article");
      });
  }, []);

  if (isLoading) {
    return (
      <div className="LoadingScreen">
        <h2>loading article...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="LoadingScreen">
        <h2>{isError}</h2>
      </div>
    );
  } else {
    return (
      <div className="ArticleDisplay">
        <div className="ArticleTitle_ImageBlock">
          <img
            src={article.article_img_url}
            alt={`${article.title}`}
            className="ArticleDisplayImage"
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              height: "100%",
            }}
          >
            <h1 style={{ padding: "5%" }}>{article.title}</h1>
            <div className="ArticleMeta">
              <h2>{article.author}</h2>
              <h2>
                {article.created_at.substring(8, 10)}/
                {article.created_at.substring(5, 7)}/
                {article.created_at.substring(0, 4)}
              </h2>
            </div>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <ArticleVoter articleObj={article} />
          <h2 className="ArtBody">{article.body}</h2>
        </div>
        <div className="CommentSection">
          <h2>{article.comment_count} Comments</h2>
          <ListArticleComments article_id={article_id} />
        </div>
      </div>
    );
  }
};

export default Article;
