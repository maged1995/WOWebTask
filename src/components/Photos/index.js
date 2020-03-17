import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../store/photos/actions";
import './index.css';
import Search from "./Search";
import List from "./List";

const Photos = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const submitSearch = () => {
    dispatch(fetchPhotos.request({ search: search }));
  }

  useEffect(() => {
    dispatch(fetchPhotos.request({ search: '' }));
  }, [dispatch])

  const images = useSelector(state => state.photosReducer.entries);
  console.log(images);
  return (
    <div id="photos">
      <Search search={search} setSearch={setSearch} submitSearch={submitSearch} />
      <List images={images} />
    </div>
  );
};

export default Photos;
