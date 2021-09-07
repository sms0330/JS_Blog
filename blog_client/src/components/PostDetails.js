import React,{useState} from 'react';

function PostDetails(props) {
  let [ like, setLike ] = useState(0)
  const IMAGE_URL = "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3cc469a19a11e5399b74bff92afafa0f2f5211ec/photo-1455894127589-22f75500213a.jpeg"
  return (
    <div className="ui segment">
      <span className="ui green tag label">{props.tags.map(tag => tag.name).join(' ')}</span>
      <h2 >Title: {props.title}</h2>
      <div className="meta">
        <i className="like">
          <i className="like pink icon" onClick={ () => setLike(like + 1) }></i> {props.favourites_count+like} Likes
        </i>
      </div>
      <img src={props.image.url === null ? props.image.url = IMAGE_URL : props.image.url} alt={props.title} style={{ width: "100%",
  height: "auto" }} />
      <p>
        Body:
        {props.body} <br />
      </p>
      <small>Create Date: {new Date(props.created_at).toLocaleDateString()} | </small>
      <small>Update Date: {new Date(props.updated_at).toLocaleDateString()}</small>
      <p>Author: {props.author.name} </p>
    </div>
  );
}

export default PostDetails;
