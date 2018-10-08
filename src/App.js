import React, {Component} from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
    state = {};
    pageNo = 1;

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
        return this.state.movies.map(movie => {
            return (
                <Movie
                    title={movie.title_english}
                    poster={movie.large_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                />
            );
        });
    };

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies: this.state.movies ? this.state.movies.concat(movies) : movies
        });
    };

    _callApi = () => {
        const url = "https://yts.am/api/v2/list_movies.json?limit=20&page=" + this.pageNo + "&sort_by=download_count";
        return fetch(url)
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
    };

    _requestNextPage = () => {
        this.pageNo++;
        this._getMovies();
    };

    render() {
        const {movies} = this.state;
        return (
            <div className={movies ? "App" : "App--loading"}>
                {movies ? this._renderMovies() : "Loading"}
                <button text="hello" onClick={this._requestNextPage}/>
            </div>
        );
    }
}

export default App;