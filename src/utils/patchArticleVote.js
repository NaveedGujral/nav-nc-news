import axios from "axios"

const patchArticleVote = (artId, newVoteObj) => {
    const URLpath = `https://ng-news.onrender.com/api/articles/${artId}`
    
    return axios
        .patch(URLpath, newVoteObj)
}

export default patchArticleVote 