import React from 'react';
import PropTypes from "prop-types";

const List = ({ images }) => {
  return (
    <div id="photos-list">
      {images.map(photo => (
        <a class="photo" href={`/photos/${photo.id}`}>
          <img src={`/images/${photo.photo}`} alt={photo.title}/>
          <h4>{photo.title}</h4>
        </a>
      ))}
    </div>
  );
};

List.propTypes = {
  images: PropTypes.object.isRequired,
};

export default List;
