import useData from "./useData.ts";
import { Genre } from "./useGenres.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
  const games = data;
  return { games, error, isLoading };
};

export default useGames;
