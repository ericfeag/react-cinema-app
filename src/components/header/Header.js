import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory , useLocation} from 'react-router-dom';
import { MOVIE_API_URL } from '../../services/movies-service';
import {getMovies, setMovieType, setResponsePageNumber, searchQuery, searchResult, clearMovieDetails} from '../../redux/actions/movies';

import './Header.scss'
//import logo from '../../logo.svg';

const HEADER_LIST = [
{
  id: 1, 
  iconClass: 'fas fa-film',
  name: 'Now Playing',
  type: 'now_playing'
},
{
  id: 2, 
  iconClass: 'fas fa-fire',
  name: 'Popular',
  type: 'popular'
},
{
  id: 3, 
  iconClass: 'fas fa-star',
  name: 'Top Rated',
  type: 'top_rated'
},
{
  id: 4, 
  iconClass: 'fas fa-square',
  name: 'Upcoming',
  type: 'upcoming'
}
];

const Header = () => {
  const { getMovies, setMovieType, page, totalPages, setRsponsePageNumber, searchQuery, searchResult } = props;
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  const [type, setType] = useState('now_playing');
  const [search, setSearch] = useState('');
  const [disableSearch, setDisableSearch] = useState(false);

  const history = useHistory();
  const location = useLocation();

  useEffect(() =>{
    getMovies(type, 1)
    setResponsePageNumber(page, totalPages)

    if (location.pathname !== '/' && location.key) {
      setDisableSearch(true);
    }

  }, [type, disableSearch, location]);

  const setMovieTypeUrl = (type) => {
    setDisableSearch(false);
    if(location.pathname !== '/') {
      clearMovieDetails();
      history.push('/');
      setType(type);
      setMovieType(type)
    } else {
    setType(type);
    setMovieType(type);
    }
  };

  const onSearchChange = (e) =>{
    setSearch(e.target.value);
    searchQuery(e.target.value);
    searchQuery(e.target.value);
  };

  const navigateToMainPage = () => {
    setDisableSearch(false);
    clearMovieDetails();
    history.push('/');
  }

  const toogleMenu = () =>{
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass){
      document.body.valssList.add('header-nav-open');
    } else{
      document.body.classList.remove('header-nav-open');
    }
  }

  return (
    <div className='header-nav-wrapper'>
        <div className='header-bar'></div>
        <div className='header-navbar'>
            <div className='header-image' onClick={() => navigateToMainPage()}>
                {/*<img src='' alt='' />*/}
                Cinema App
            </div>
            <div 
                className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} 
                id='header-mobile-menu'
                OnClick = {() => toggleMenu()}
                >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
        </div>
        <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
        {
          HEADER_LIST.map((data) => 
          <li 
          key={data.id}
          className={data.type === type ? 'header-nav-itme active-item' : 'header-nav-item'}
          onClick={() => setMovieTypeUrl(data.type) }
          >
          <span className='header-list-name'>
            <i className={data.iconClass}></i>
          </span>
          &nbsp;
           <span className='header-list-name'>{data.name}</span>
          </li>
          )
        }
        </ul>
        <input
          className={`search-input ${disableSearch ? 'disabled' :''}`}
          type = 'text'
          placeholder='Search for a movie'
          value= {search}
          onChange= {onSearchChange}

          />
      </div>
    </div>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func,
  setMovieType: PropTypes.func,
  searchQuery: PropTypes.func,
  searchResult: PropTypes.func,
  clearMovieDetails: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number
}

const mapStateToProps = (state) =>({
 // list: state.movies.list,
  page: state.movie.page,
  totalPages: state.movies.totalPages
});

export default connect(
  mapStateToProps,
  {getMovies, setMovieType, setResponsePageNumber, searchQuery, searchResult }
)(Header);