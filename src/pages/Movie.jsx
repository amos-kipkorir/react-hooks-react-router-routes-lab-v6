import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch movie");
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setLoading(false);
      });
  }, [id]);
   if (loading) return <p>Loading...</p>
   if (!movie) return <p>Movie not Found</p>
  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {/* What component should go here? */}
      </header>
      <main>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
        {/* Movie info here! */}
      </main>
    </>
  );
};

export default Movie;
