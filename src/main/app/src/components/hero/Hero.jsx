import React, { useEffect, useState } from 'react';
import './hero.css';
import {
  apiHeroImageGenerate,
  getImageURL,
  indexGenerator,
  randomBackdropIndex,
} from '../../utils/movieUtils';

function Hero() {
  const [heroImage, setHeroImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    apiHeroImageGenerate().then((response) => {
      // console.log(response);
      const movies = response.data.results;
      const index = indexGenerator(1, movies.length) - 1;
      setHeroImage(
        getImageURL(movies[index].backdrop_path, 1920, 600)
      );
    });
  }, []);

  return (
    <div className="heroContainer">
      {loading && <div className="heroImagePlaceHolder"></div>}
      <img
        src={heroImage}
        className="heroImage"
        onLoad={() => setLoading(false)}
      />
      <div className="heroContent">
        <div className="heroTitle">
          <h1 className="heroTitleHeading">Welcome.</h1>
          <p className="heroTitleTagLine">
            From blockbusters to indie hits, we've got you covered
            with insightful reviews
          </p>
        </div>
        <div className="heroSearch">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="heroSearchBox"
            placeholder="Search for a movie, tv show, person.."
          />
          <button className="heroSearchButton">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
