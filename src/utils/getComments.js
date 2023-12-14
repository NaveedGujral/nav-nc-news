import axios from "axios"

const getComments = (artId) => {
    const URLpath = `https://ng-news.onrender.com/api/articles/${artId}/comments`
    return axios
    .get(URLpath)
    .then((response) => {
            const { comments } = response.data
            return comments
    })
}

export default getComments 