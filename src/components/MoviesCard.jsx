import Genres from "./Genres";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className="movie-img" src={movie.image} alt={movie.title} />
      <div className="movie-details">
        <p className="movie-meta">Title: {movie.title}</p>
        <p className="movie-meta">Year: {movie.year}</p>
        <p className="movie-meta">Runtime: {movie.runtime}</p>
        <div className="genres">
          <Genres genres={movie.genres} />
        </div>
        <p className="movie-meta">IMDB Ratings: {movie.imdbRating}</p>
        <p className="movie-meta">IMDB Votes: {movie.imdbVotes}</p>
      </div>
    </div>
  );
}

export default MovieCard;
