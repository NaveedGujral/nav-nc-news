/*

{
      "comment_id": 89,
      "votes": 2,
      "created_at": "2020-10-24T07:08:00.000Z",
      "author": "cooljmessy",
      "body": "Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.",
      "article_id": 1
    },

*/

const CommentCard = (props) => {
    const { commentObj } = props
    const { comment_id, votes, created_at, author, body } =  commentObj

    return (
        <div className="CommentCard">
            <h3>
                {author}
            </h3>
            <p>
                {body}
            </p>
            <div className="CommentCardMeta">
                <p>Posted: {created_at.substring(8, 10)}/{created_at.substring(5, 7)}/{created_at.substring(0, 4)}</p>
                <p>{votes} Votes</p>
            </div>
            <hr />
        </div>
    )
}

export default CommentCard