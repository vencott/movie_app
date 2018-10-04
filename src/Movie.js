import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>);
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster"/>
    );
}

Movie.propTypes = {
    title: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: Proptypes.string.isRequired
};

export default Movie;