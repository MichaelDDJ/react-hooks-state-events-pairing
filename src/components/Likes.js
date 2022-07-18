import React from 'react'

function Likes ({upvotes, downvotes, setDislikes, setLikes}) {

    function addLikes () {
        setLikes((upvotes)=> upvotes + 1)
    }

    function addDislikes () {
        setDislikes((downvotes)=> downvotes + 1)
    }

    return <div>
        <button onClick={addLikes}>{upvotes} 👍</button>
        <button onClick={addDislikes}>{downvotes} 👎</button>
    </div>
}

export default Likes