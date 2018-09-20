import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
    "Matrix",
    "Full Metal Jacket",
    "Old boy",
    "Star wars"
];

const movieImages = [
    "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/a2/ff/49/a2ff498c-2567-39f3-578f-4f023d414fbd/pr_source.lsr/268x0w.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJZ4cb20ESPz7NdrGsLKZH628KITeoz97CfutioMW56Qj2vMq"
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Movie title={movieTitles[0]} poster={movieImages[0]}/>
                <Movie title={movieTitles[1]} poster={movieImages[1]}/>
                <Movie title={movieTitles[2]} poster={movieImages[2]}/>
                <Movie title={movieTitles[3]} poster={movieImages[3]}/>
            </div>
        );
    }
}

export default App;
