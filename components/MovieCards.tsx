// Movie Cards Component
import Card from "./Card";

export default async function MovieCards() {
  return (
    <div className="flex justify-evenly w-full flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
