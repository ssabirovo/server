import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/nav-bar";
import Genres from "./components/genres";
import Movies from "./components/movies";
import Loader from "./components/loader";
import { paginate } from "./helpers/paginate";

class App extends Component {
  state = {
    loading: true,
    movies: [],
    genres: [],
    genreID: "62e205b8a01bc724f00bf9dd",
    currentPage: 0,
    pageSize: 3,
  };

  handleSelectGenre = (newGenreID) => {
    this.setState({ genreID: newGenreID });
  };

  handleLike = (movieID) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie._id === movieID);

    movie.isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  async componentDidMount() {
    const movieRes = await fetch("http://10.10.1.60:8000/api/movies");
    const movies = await movieRes.json();

    const genreRes = await fetch("http://10.10.1.60:8000/api/genres");
    const genres = await genreRes.json();
    genres.unshift({ name: "All", _id: "all" });
    setTimeout(() => this.setState({ loading: false, movies, genres }), 1000);
  }

  render() {
    const { loading, movies, genres, genreID, pageSize, currentPage } =
      this.state;

    const filteredMovies = movies.filter(
      (movie) => genreID === "all" || movie.genre._id === genreID
    );
    const paginatedMovies = paginate(filteredMovies, pageSize, currentPage);
    if (loading) return <Loader />;

    return (
      <>
        <NavBar />
        <div className='container pt-4'>
          <div className='row d-flex'>
            <Genres
              genres={genres}
              genreID={genreID}
              onSelect={this.handleSelectGenre}
            />
            <Movies movies={paginatedMovies} onLike={this.handleLike} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
