import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return    ( 
   <Link to={{
        pathname: "/movie-detail"
        ,state : {
            year:year,
            title:title,
            summary:summary,
            posetr:poster,
            genres:genres            
        }
    }}>
        <div className="movie">
            <img src={poster} title={title} alt={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className ="movie__genres">
                    {genres.map((genre, index) => ( //map은 key가 있어야 함.
                    <li key={index} className ="genres_genre"> {genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    </Link> 
   );
}


Movie.propTypes={
    id: PropTypes.number.isRequired
    ,year:PropTypes.number.isRequired
    ,title:PropTypes.string.isRequired
    ,summary:PropTypes.string.isRequired
    ,poster:PropTypes.string.isRequired
    ,genres:PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;