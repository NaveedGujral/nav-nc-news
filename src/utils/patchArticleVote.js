import axios from "axios"

const patchArticleVote = (artId, voteInc) => {
    const URLpath = `https://ng-news.onrender.com/api/articles/${artId}`

    const newVoteObj = {
        inc_votes : voteInc
    }

        return axios
            .patch(URLpath, newVoteObj)
}

export default patchArticleVote 