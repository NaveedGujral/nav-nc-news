import axios from "axios"

const getSingleArticle = (artId) => {
    const URLpath = `https://ng-news.onrender.com/api/articles/${artId}`
    
    return axios
        .get(URLpath)
        .then((response) => {
            const { article } = response.data
            console.log(article)
            return article
    })
}

export default getSingleArticle  