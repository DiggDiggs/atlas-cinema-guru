import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import { ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon as SolidClock } from "@heroicons/react/24/solid";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

type CardProps = {
  title: string;
  description: string;
  genre: string;
  imageSrc?: string; // Optional image source prop
};

export default function Card({
  title,
  description,
  genre,
  imageSrc = placeholder,
}: CardProps) {
  return (
    <div className="group my-2 mx-4 w-3/12 relative">
      <ClockIcon className="size-6 absolute inset-0 text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <StarIcon className="size-6 absolute inset-0 text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <Image src={imageSrc} alt="Movie Image" className="block rounded-lg" />
      <div className="relative p-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="text-sm text-gray-500">{genre}</div>
      </div>
    </div>
  );
}
