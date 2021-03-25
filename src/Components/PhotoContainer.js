import React from 'react';
import Photo from './Photo';
import Nav from './Nav';


const PhotoContainer = props => {

  const results = props.data;
  let photos = results.map(photo =>
    <Photo
      url={ `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` }
      key={photo.id}
      />
  );

  return (
    <div className="photo-container">
      <Nav />

      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;
