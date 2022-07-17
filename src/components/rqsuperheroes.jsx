import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  const { isLoading, isFetching, data, isError, error} =
    useSuperHeroesData;
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>Rq Super Heroes</h2>
      {data?.data.map((hero) => {
        return <p key={hero.name}>{hero.name}</p>;
      })}
    </>
  );
};

export default RQSuperHeroes;
