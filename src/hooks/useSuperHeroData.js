import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroData = (heroId) => axios.get(`http://localhost:4000/superheroes/${heroId}`);
export const useSuperHeroeData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchHeroData(heroId));
};
