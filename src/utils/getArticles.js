import axios from "axios"

const getArticles = () => {
    const URLpath = "https://ng-news.onrender.com/api/articles"
    
    // DEBUGGING - Tests the loading screen
    // const URLpath = "https://ng-news.onrender.com/api/article"

    return axios
        .get(URLpath)
        .then((response) => {
            console.log(response)
            const { articles } = response.data
            return articles
    })
    .catch((error) => {
        console.log(error)
    })
}

export default getArticles  