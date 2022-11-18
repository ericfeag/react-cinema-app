import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Main.scss';
import MainContent from '../content/main-content/MainContent'
import Spinner from '../spinner/Spinner'
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';

const Main = (props) => {
  const { loadMoreMovies, page, totalPages, setResponsePageNumber} = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(()  =>{
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 3000);
  },[]);
  useEffect(()  =>{
    setResponsePageNumber(currentPage, totalPages);
   loadMoreMovies('now_playing', currentPage)
  },[currentPage]);

  const fetchData = () => {
    if (page > totalPages){
      setCurrentPage((prev) => prev + 1);
    }
  }

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      fetchData();
    }
  }

  return (
    <div className='main' ref={mainRef} onScroll={() => handleScroll()}>
      {
        loading ? <Spinner /> : <MainContent />
      }
        <div ref={bottomLineRef}></div>
    </div>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalPagea: PropTypes.number,
  loadMoreMovies: PropTypes.func
};


const mapStateToProps = (state) => ({
  list: state.movies.list,
  list: state.movies.page,
  totalPages: state.movies.totalPages
});

export default connect(
  mapStateToProps,
{ loadMoreMovies , setResponsePageNumber }
)(Main);