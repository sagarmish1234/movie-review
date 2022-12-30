import React, { useEffect, useState } from 'react';
import MovieCard from '../movieCard/MovieCard';
import { MOVIE_SLIDER_URLS } from '../../config/constants';
import { apiFetchUrlItems } from '../../utils/movieUtils';
import './cardSlider.css';

function CardSlider({ title }) {
  const category = MOVIE_SLIDER_URLS[title];
  const [currentUrl, setCurrentUrl] = useState(category.urls[0].url);
  const [selected, setSelected] = useState(0);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    apiFetchUrlItems(currentUrl).then((response) => {
      console.log(response);
      setMovies(response.data.results);
    });
  }, [selected]);

  const handleSelect = (index) => (e) => {
    setSelected(index);
    setCurrentUrl(category.urls[index].url);
  };

  return (
    <div className="cardSliderContainer">
      <div className="cardSliderHeader">
        <div className="cardSliderHeaderTitle">{category.title}</div>
        <div className="cardSliderHeaderUrls">
          {category.urls.map((url, index) => {
            return (
              <div
                key={index}
                onClick={handleSelect(index)}
                className={
                  'cardSliderOption ' +
                  (index == selected ? 'selected' : '')
                }
              >
                {url.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="cardSliderCardList">
        {movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
}

export default CardSlider;
