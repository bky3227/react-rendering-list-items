/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import MovieCard from "./components/MoviesCard";
import movies from "./data/movies";

function App() {
  return (
    <section className="movie-list-section">
      <p css={css`
        font-family: "Kanit", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        line-height: 18px;
        text-align: center;
        color: black;
      `}>
        Movie List Section
      </p>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </section>
  );
}

export default App;

