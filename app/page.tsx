// Home Page
import Filters from "@/components/Filters";
import MovieCards from "@/components/MovieCards";

export default async function Page() {
  // Consider adding error handling and loading states if fetching data
  try {
    // Fetch data or perform async operations if needed

    return (
      <div className="flex flex-col w-screen h-screen">
        <Filters />
        <MovieCards />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data. Please try again later.</div>;
  }
}
