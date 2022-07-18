import React from 'react'

function CommentBuilder ({name, post}) {
    return <div>
        <h3>{name}</h3>
        <p>{post}</p>
    </div>

}

export default CommentBuilder