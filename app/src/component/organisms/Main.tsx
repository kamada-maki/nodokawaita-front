import RecommendedRestaurants from "component/molecules/RecommendedRestaurants";
import RecommendedTags from "component/molecules/RecommendedTags";
import Search from "component/molecules/Search";

export const Main = () => {
  return (
    <>
      <Search />
      <RecommendedTags />
      <RecommendedRestaurants />
    </>
  );
}

export default Main;
