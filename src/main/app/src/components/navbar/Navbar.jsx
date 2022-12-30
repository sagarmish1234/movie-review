import React from 'react';
import Image from '../../assets/images/Logo.png';
import { BiSearch } from 'react-icons/bi';
import Dropdown from '../dropdown/Dropdown';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarHeader">
        <div className="navbarLeft">
          <Link to="/" className="navbarLink navbarBrand">
            <img className="navbarBrandLogo" src={Image} />
            <div className="navbarBrandTitle">
              Picture Perfect Reviews
            </div>
          </Link>
          <div className="navbarLink">
            Movies
            <Dropdown
              options={[
                'Popular',
                'Upcoming',
                'Now Playing',
                'Top Rated',
              ]}
            />
          </div>
          <div className="navbarLink">
            Tv Shows
            <Dropdown
              options={[
                'Popular',
                'Airing Today',
                'On TV',
                'Top Rated',
              ]}
            />
          </div>
          <div className="navbarLink">
            People
            <Dropdown options={['Popular People']} />
          </div>
        </div>
        <div className="navbarRight">
          <Link to={'/login'} className="navbarLink">
            Login
          </Link>
          <Link to={'/register'} className="navbarLink">
            Join PPR
          </Link>
          <div className="navbarLink">
            <BiSearch
              style={{ fontSize: '1.7rem', color: '#7B95A6' }}
            ></BiSearch>
          </div>
        </div>
      </div>
      <div className="navbarSearchBoxContainer"></div>
    </div>
  );
}

export default Navbar;
