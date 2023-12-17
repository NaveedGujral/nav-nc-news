import { useEffect, useState } from 'react'

import VoteUpInc from '/home/naveed/northcoders/frontend/nav-nc-news/src/assets/VoteUpInc.svg'
import VoteUpIncClicked from '/home/naveed/northcoders/frontend/nav-nc-news/src/assets/VoteUpInc-Clicked.svg'
import VoteDownInc from '/home/naveed/northcoders/frontend/nav-nc-news/src/assets/VoteDownInc.svg'
import VoteDownIncClicked from '/home/naveed/northcoders/frontend/nav-nc-news/src/assets/VoteDownInc-Clicked.svg'
import patchArticleVote from '../utils/patchArticleVote'

const ArticleVoter = (props) => {
    const { articleObj } = props
    const { votes, article_id } = articleObj
    
    const [currVotes, setCurrVotes] = useState(votes)
    const [votesCounter, setVotesCounter] = useState(0)
    const [voteUpIconState, setVoteUpIconState] = useState(VoteUpInc)
    const [voteDownIconState, setVoteDownIconState] = useState(VoteDownInc)
    const [isError, setIsError] = useState(null)
    
    const vote = (voteInc) => {
        if (votesCounter < 1) {
            patchArticleVote(article_id, voteInc)
            .catch((err) => {
                setIsError("Error: " + err.message)
                
                if (voteInc === 1) {
                setCurrVotes(currVotes)
                setVoteUpIconState(VoteUpInc)
                }
                
                if (voteInc === -1) {    
                setCurrVotes(currVotes)
                setVoteDownIconState(VoteDownInc)
                }
            })
            
            setCurrVotes(currVotes + voteInc)
            setVotesCounter(votesCounter + 1)
                    
            if (voteInc === 1) {
                setVoteUpIconState(VoteUpIncClicked)
            }
            if (voteInc === -1) {
                setVoteDownIconState(VoteDownIncClicked)
            }
        }
    }

    return (
        <div className='VoteBlock'>
            <h3>
                {isError}
            </h3>
            <button className='VoteButton' onClick={() => vote(1)}> 
                <img src={voteUpIconState} className='VoteIcon'/>
            </button>
            <button className='VoteButton' onClick={() => vote(-1)}> 
                <img src={voteDownIconState} className='VoteIcon'/>
            </button>
            <h2>
                {currVotes} Votes
            </h2>
        </div>
    )
}


export default ArticleVoter