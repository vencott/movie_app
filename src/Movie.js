import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster/>
                <h1>Hello this is a movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://images-na.ssl-images-amazon.com/images/I/61Mo1-oLQxL.jpg"/>
        );
    }
}

export default Movie;