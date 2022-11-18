import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainContent.scss'
import SlideShow from '../slide-show/Slideshow'
import Grid from '../grid/Grid';
import { IMAGE_URL } from '../../../services/movies-service';
import {getMovies, setResponsePageNumber} from '../../../redux/actions/movies'

const MainContent = (props) => {
  const imagesArray = [
    {
      url: ''
    },
    {
      url: ''
    },
    {
      url: ''
    },
  ];
  const {list, movieType,totalPages, page, getMovies, setResponsePageNumber } = props;
  const [currentPage, setCurrentPage] = useState(page);
  const [images, setImages] = useState();
  const randomMovies = list.sort(() => Math.random() -Math.random()).slice(0,4);

  const HEADER_TYPE = {
    now_playing: 'Now Playing',
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming'
  }

  useEffect(()=> {
    if (randomMovies.length){
      const IMAGES = [{
        id: 1, 
        url: `${IMAGE_URL}/${randomMovies[0].backrop_path}`
      },
      {
        id: 2, 
        url: `${IMAGE_URL}/${randomMovies[1].backrop_path}`
      },
      {
        id: 3, 
        url: `${IMAGE_URL}/${randomMovies[2].backrop_path}`
      },
      {
        id: 4, 
        url: `${IMAGE_URL}/${randomMovies[3].backrop_path}`
      },
    ];
    setImages(IMAGES);
    }
  }, [])

  useEffect(() =>{
    setCurrentPage(page);
  },[page, totalPages]);

  const paginate = (type) =>{
    let pageNumber = currentPage;
    if(type === 'prev' && currentPage > 1){
      pageNubmer -= 1;
      setCurrentPage((prev) => prev -1);
    } else {
      pageNumber += 1;
    }
      setCurrentPage(pageNumber);
      setResponsePageNumber(pageNumber, totalPages);
      getMovies(movieType, pageNumber);
   
  };
  return (
    <div className='main-content'>
      <SlideShow images={images} auto={true }/>
        {/* display slideshow component */}
        <div className='grid-movie-title'>
            <div className='movieType'>{movieType}</div>
            <div className='paginate'>
            <Paginate currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>
            </div>
            <Grid />
        </div>
        {/* display grid component */}
    </div>
  )
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired,
  movieType: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  Page: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired,
  setResponsePageNumber: PropTypes.func.isRequired

};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  movieType: state.movies.movieType,
  totalPages: state.movies.totalPages,
  pages: state.movies.page
})



 export default connect(
  mapStateToProps,
  {getMovies, setResponsePageNumber}
 )(MainContent);