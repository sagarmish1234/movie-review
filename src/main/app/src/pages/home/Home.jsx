import React from 'react';
import Hero from '../../components/hero/Hero';
import CardSlider from '../../components/cardSlider/CardSlider';

function Home() {
  return (
    <div>
      <Hero></Hero>
      <CardSlider title={'popular'}></CardSlider>
      <CardSlider title={'upcoming'}></CardSlider>
      <CardSlider title={'trending'}></CardSlider>
    </div>
  );
}

export default Home;
