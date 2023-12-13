const ArticleCard = (props) => {
    const { articleObj } = props
    const { article_img_url, article_id, title, author, created_at, votes, comment_count } =  articleObj 

    return (
        <div className="ArticleCard">
            <img src={article_img_url} alt="test"/>
               <div className="CardBanner">
                    <h2>
                        {title}
                    </h2>
                    <h3>
                        {author}
                    </h3>
                    <h3>
                        {created_at.substring(0, 9)}
                    </h3>
                    <h3>
                        {comment_count} Comments
                    </h3>
                    <h3>
                        {votes} Votes
                    </h3>
                </div> 
        </div>
    )
}

export default ArticleCard