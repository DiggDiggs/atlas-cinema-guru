import { useEffect, useState } from "react";
import Card from "./Card"; // Assuming the Card component is in the same directory

// Define the Movie type
interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string; // Image URL
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]); // State to store movie data

  // Fetch movie data when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://congenial-space-adventure-6wvxw5j4vjqfrrjv-3000.app.github.dev/api/titles?page=1"
      ); // Update this URL
      const data = await response.json();
      setMovies(data.title); // Assuming 'title' is the key holding the movie data
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {/* Map over the movie data to render each Card */}
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} /> // Pass each movie as a prop to Card
      ))}
    </div>
  );
}
