import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>

            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres && genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>);
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    );
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre}</span>
    );
}

Movie.propTypes = {
    title: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    synopsis: Proptypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: Proptypes.string.isRequired,
    alt: Proptypes.string.isRequired
};

MovieGenre.propTypes = {
    genre: Proptypes.string.isRequired
};

export default Movie;