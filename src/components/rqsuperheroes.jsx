import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes ");
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>Rq Super Heroes</h2>
      {data?.data.map(hero => {
        return <p key={hero.name}>{hero.name}</p>;
      })}
    </>
  );
};

export default RQSuperHeroes;
