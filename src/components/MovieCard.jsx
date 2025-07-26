import {Link} from 'react-router-dom';

function MovieCard({ movie }) {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;