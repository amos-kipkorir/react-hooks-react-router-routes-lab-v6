import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then(setDirectors);
  }, []);
  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
        {/* What component should go here? */}
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;
