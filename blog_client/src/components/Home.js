import React from 'react';
import image from '../striving-blogger-bVoUMGH5gBY-unsplash.jpeg';

export default function Home() {
  return (
  <div className="Page">
   <div className="ui teal segment">Welcome to JS Blog!</div>
   <img className="ui fluid image" src={image} alt={image}></img>
  </div>
  )
}