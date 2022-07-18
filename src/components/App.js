import React, {useState} from 'react'
import video from "../data/video.js";
import Video from './Video'
import Info from './Info'
import Likes from './Likes'
import Comments from './Comments.js';

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setLikes] = useState(video.upvotes)
  const [downvotes, setDislikes] = useState(video.downvotes)
  const [comments, setComments] = useState(video.comments)
  const [commentBtn, setCommentBtn] = useState('Hide Comments')
  const commentNumber = video.comments.length;
  const commentList = video.comments;


  return (
    <div className="App">
      <Video url={video.embedUrl} title={video.title} />
      <Info views={video.views} time={video.createdAt} />
      <Likes upvotes={upvotes} setLikes={setLikes} downvotes={downvotes} setDislikes={setDislikes} />
      <Comments commentNumber={commentNumber} comments={comments} setComments={setComments} commentList={commentList} commentBtn={commentBtn} setCommentBtn={setCommentBtn} />
    </div>
  );
}

export default App;
