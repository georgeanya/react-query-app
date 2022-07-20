import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RqSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroesData(heroId);
    if (isLoading) {
    return <div>Loading...</div>
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }
    
    return <div>
      {data?.data.name} - {data?.data.alterEgo}
  </div>;
};

export default RqSuperHero;
