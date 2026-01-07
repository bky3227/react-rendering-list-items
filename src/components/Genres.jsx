function Genres({ genres }) {
  return (
    <div className="genres">
      <p className="genres-label">Genres:</p>
      {genres.map((genre, index) => (
        <span key={index} className="genre-badge">
          {genre}
        </span>
      ))}
    </div>
  );
}

export default Genres;
