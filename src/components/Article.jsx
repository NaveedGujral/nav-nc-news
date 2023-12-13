import axios from 'axios';
import { useEffect, useState } from 'react';
import getSingleArticle from '../utils/getSingleArticle';

const Article = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")

    useEffect(() => {
        getSingleArticle()
        .then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError("could not retrieve article")
        })
    }, [])

    if (isLoading) {
        return (
        <div className='LoadingScreen'>
            <h2>
                loading article...
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
        <ul className="ArticleDisplay">
        </ul>
        )
    }
}

export default Article