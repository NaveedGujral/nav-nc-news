const ArticleCard = (props) => {
    const { articleObj } = props
    const { article_img_url, article_id, title } =  articleObj 

    console.log(articleObj)

    return (
        <div className="ArticleCard">
            <img src={article_img_url} alt="test"/>
               <div className="CardBanner">
                    <h2>
                        {title}
                    </h2>
                </div> 
        </div>
    )
}

export default ArticleCard