import React from 'react';
import { connect } from 'react-redux' 
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import './Crew.scss';
import { IMAGE_URL } from '../../../../services/movies-service';

const Crew = () => {
  const { movie } = props;
  const { credits} = useState(movie[1])
  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          {
            credits.crew.map((data)=> 
            <tbody key={uuidv4()}>
              <tr>
                <td>
                  <img src={
                    data.profile_path ? `${IMAGE_URL}${data/profiel_path}` : 'http://placehold.it/54x81'
                  } alt="" />
                </td>
                <td>{data.name}</td>
                <td>{data.department}</td>
                <td>{data.job}</td>
              </tr>
            </tbody>
            )
          }
          <tbody>
            <tr>
              <td>
                <img src="http://placehold.it/54x81" alt="" />
              </td>
              <td>Alan Silvestri</td>
              <td>Sound</td>
              <td>Original Music Composer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Crew.propTypes = {
  movie: PropTypes.array,
  movieDetails: PropTypes.func
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});


export default connect(
  mapStateToProps,
  {}
)(Crew);
