import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
const RQSuperHeroes = () => {
  const { isLoading, isFetching, refetch, data, isError, error } = useSuperHeroesData();
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
          <h2>Rq Super Heroes</h2>
          <button onClick={refetch}> Fetch</button>
      {/* {data?.map((heroName) => {
        <p key={heroName}>{heroName}</p>;
      })} */}
      {data?.data.map((hero) => {
          return <div key={hero.id}>
              <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
          </div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
