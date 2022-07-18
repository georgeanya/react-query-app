import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => axios.get("http://localhost:4000/superheroes");
export const useSuperHeroesData = () => {
  useQuery("super-heroes", fetchData, {
    select: (data) => {
      const superHeroes = data?.data.map((hero) => hero.name);
      return superHeroes;
    },
  });
};
