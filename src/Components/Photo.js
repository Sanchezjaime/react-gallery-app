import React from 'react';
import PhotoContainer from './PhotoContainer';

const Photo = (props) => (
  <>
    <li>
      <img src={props.url} alt=""/>
    </li>
  </>
);

export default Photo;
