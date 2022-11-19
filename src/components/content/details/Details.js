import React from 'react';
import Rating from '../rating/Rating';
import './Details.scss';
import Tabs from '../tabs/Tabs';
import Overview from '../overview/Overview';
import Crew from '../crew/Crew';
import Media from '../media/Media';
import Review from '../review/Review';

export const Details = () => {
  return (
    <>
        <div className='movie-container'>
            <div 
            className='movie-bg'
            style= {{ backgroundImage:'url(https://www.pexels.com/photo/abandoned-ancient-antique-architecture-235986/)'}}
            ></div>
            <div className='movie-overlay'></div>
            <div className='movie-image'>
                <div classANmae='movie-image'>
                    <img src='https://www.pexels.com/photo/abandoned-ancient-antique-architecture-235986/' alt=''></img>
                </div>
                 <div className='movie-body'>
                    <div className='movie-overview'>
                        <div className='title'>
                            Parera <span>2020</span>
                        </div>
                        <div className='movie-genres'>
                            <ul className='genres'>
                               <li>Action</li>
                               <li>Comedy</li>
                               <li>Sci-fi</li>   
                            </ul>
                        </div>
                        <div className='rating'>
                            <Rating className='rating-stars' rating={6.5} totalStars={10}/>
                            &nbsp;
                            <span>6.5</span> <p>(200) reviews</p>
                        </div>
                        <Tabs>
                            <div label = 'Overview'>
                                <Overview />
                            </div>
                            <div label = 'Crew'>
                               <Crew />
                            </div>
                            <div label = 'Media'>
                                <Media />
                            </div>
                            <div label = 'Reviews'>
                                <Review />
                            </div>
                        </Tabs>
                    </div>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Details;

