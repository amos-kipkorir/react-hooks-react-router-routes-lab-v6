import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then(setMovies);
  }, []);
  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
        {/* What component should go here? */}
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
