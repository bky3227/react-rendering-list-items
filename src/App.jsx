import "./App.css";
import movies from "./data/movies.jsx";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>

        {movies.map((item) => (
          <div className="movie-card" key={item.title}>
            <img
              className="movie-image"
              src={item.image}
              alt={item.title}
            />

            <div className="movie-content">
              <p className="movie-title">Title: {item.title}</p>
              <p>Year: {item.year}</p>
              <p>Runtime: {item.runtime}</p>

              <div className="genres">
                <span>Genres:</span>
                {item.genres.map((genre) => (
                  <span className="genre-tag" key={genre}>
                    {genre}
                  </span>
                ))}
              </div>

              <p>IMDB Rating: {item.imdbRating}</p>
              <p>IMDB Votes: {item.imdbVotes}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
