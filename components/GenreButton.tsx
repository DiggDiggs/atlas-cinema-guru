// Genre Button Component
"use client"; // Add this line to make this a Client Component

type GenreButtonProps = {
  genre: string;
  onClick: () => void; // Add the onClick prop here
};

export default function GenreButton({ genre, onClick }: GenreButtonProps) {
  return (
    <button
      onClick={onClick} // Use the onClick prop here
      className={
        "bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1"
      }
    >
      {genre}
    </button>
  );
}
