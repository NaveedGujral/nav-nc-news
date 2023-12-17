import axios from "axios"
import { useState } from "react"

const patchArticleVote = (artId, voteInc) => {
    const URLpath = `https://ng-news.onrender.com/api/articles/${artId}`
    

    // tests invalid  url 
    // const URLpath = `https://ng-news.onrender.com/api/art/${artId}`

    const newVoteObj = {
        inc_votes : voteInc
    }

        return axios
            .patch(URLpath, newVoteObj)
}

export default patchArticleVote 