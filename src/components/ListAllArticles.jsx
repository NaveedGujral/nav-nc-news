import axios from 'axios';
import ArticleCard from './ArticleCard';
import { useEffect, useState } from 'react';
import getArticles from '../utils/getArticles';
const URLpath = "https://ng-news.onrender.com/api/articles"

const ListAllArticles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles()
        .then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
        <div>
            <p>
                loading articles...
            </p>
        </div>
        )
    }
    
    else {
        return (
        <ul className="ArticleList">
            { articles.map((article) => {
                    return <ArticleCard articleObj={article} key={article.article_id}/>
                })}
        </ul>
        )
    }
}

export default ListAllArticles

axios.get()