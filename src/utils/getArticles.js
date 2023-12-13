import axios from "axios"

const getArticles = () => {
    const URLpath = "https://ng-news.onrender.com/api/articles"
    
    return axios
        .get(URLpath)
        .then((response) => {
            const { articles } = response.data
            return articles
    })
}

export default getArticles  