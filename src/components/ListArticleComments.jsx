import CommentCard from './CommentCard';
import { useEffect, useState } from 'react';
import getComments from '../utils/getComments';

const ListAllArticleComments = (props) => {
    const { article_id } = props
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")

    useEffect(() => {
        getComments(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError("could not retrieve comments")
        })
    }, [])

    if (isLoading) {
        return (
        <div className='LoadingScreen'>
            <h2>
                loading comments...
            </h2>
        </div>
        )
    }
    
    if (isError) {
        return (
        <div className='LoadingScreen'>
            <h2>
                {isError}
            </h2>
        </div>
        ) 
    }
    
    else {
        return (
        <ul className="CommentList">
            { comments.map((comment) => {
                    return <CommentCard commentObj={comment} key={comment.comment_id}/>
                })}
        </ul>
        )
    }
}

export default ListAllArticleComments
