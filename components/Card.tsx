import { ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Define the Movie type
interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string; // Image URL
}

interface CardProps {
  movie: Movie; // Receiving movie data as props
}

export default function Card({ movie }: CardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg outline outline-1 outline-teal">
      {/* Icons on hover */}
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ClockIcon className="w-6 h-6 cursor-pointer" />
        <StarIcon className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Movie Image */}
      <Image
        src={movie.image} // This comes from the API
        alt={movie.title} // Use the movie title for alt text
        width={500} // Set a fixed width (adjust as needed)
        height={500} // Set a fixed height (adjust as needed)
        className="object-cover w-full h-full"
      />

      {/* Movie Details */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-light-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg my-2">
          {movie.title} ({movie.released})
        </h2>
        <p className="text-base my-2">{movie.synopsis}</p>
        <div className="flex flex-wrap justify-start gap-2">
          <div className="my-2 bg-dark-teal rounded-3xl p-2">{movie.genre}</div>
        </div>
      </div>
    </div>
  );
}
