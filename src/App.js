import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/a2/ff/49/a2ff498c-2567-39f3-578f-4f023d414fbd/pr_source.lsr/268x0w.png"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
    },
    {
        title: "Old boy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
    },
    {
        title: "Star wars",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJZ4cb20ESPz7NdrGsLKZH628KITeoz97CfutioMW56Qj2vMq"
    }
];

class App extends Component {
    state = {
        greeting: 'Hello!',
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                greeting: "Hello again!"
            });
        }, 5000);
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                {this.state.greeting}
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index}/>;
                })}
            </div>
        );
    }
}

export default App;