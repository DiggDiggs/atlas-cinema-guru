// Genres Component
"use client";

import GenreButton from "./GenreButton";

const genresList = [
  "Romance",
  "Horror",
  "Drama",
  "Action",
  "Mystery",
  "Fantasy",
  "Thriller",
  "Western",
  "Sci-Fi",
  "Adventure",
];

export default function Genres() {
  const handleGenreClick = (genre: string) => {
    console.log(`${genre} genre selected`);
    // You can add additional logic for filtering or actions here
  };

  return (
    <div className="w-4/12 m-7">
      <h2 className="mt-2 mb-1">Genres</h2>
      {genresList.map((genre) => (
        <GenreButton
          key={genre}
          genre={genre}
          onClick={() => handleGenreClick(genre)}
        />
      ))}
    </div>
  );
}
