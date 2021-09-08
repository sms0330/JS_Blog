import React,{useState} from 'react';

function PostDetails(props) {
  let [ like, setLike ] = useState(0)

  return (
    <div className="ui segment">
      <span className="ui green tag label">{props.tags.map(tag => tag.name).join(' ')}</span>
      <h2 >Title: {props.title}</h2>
      <div className="meta">
        <i className="like">
          <i className="like pink icon" onClick={ () => setLike(like + 1) }></i> {props.favourites_count+like} Likes
        </i>
      </div>
      {props.image.url ?
      <img src={`http://localhost:3000${props.image.url}`} alt={props.title} style={{ width: "100%",
      height: "auto" }}/> : null }
      <p>
        Body:
        {props.body} <br />
      </p>
      <small>Create Date: {new Date(props.created_at).toLocaleDateString()} | </small>
      <small>Update Date: {new Date(props.updated_at).toLocaleDateString()}</small>
      <p>Author: {props.author.full_name} </p>
    </div>
  );
}

export default PostDetails;
