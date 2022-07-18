import React from 'react'
import CommentBuilder from './CommentBuilder'

function Comments ({commentNumber, comments, setComments, commentList, commentBtn, setCommentBtn}) {
    console.log(commentList)
    setComments(commentList)
    console.log(comments)
    
    const newCommentList = comments.map((comment) => {
        return <CommentBuilder key={comment.id} name={comment.user} post={comment.comment} />
    })

    function handleComments (event) {
        let change = (commentBtn == 'Hide Comments') ? 'Show Comments' : 'Hide Comments';
        setCommentBtn(change)
        return event.target.parentNode.lastChild.hidden
    }

    return <div>
        <button onClick={handleComments}>{commentBtn}</button>
        <hr></hr>
        <h2>{commentNumber} Comments</h2>
        <div>
        {newCommentList}
        </div>
        
    </div>
}

export default Comments