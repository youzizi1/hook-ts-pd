import * as React from "react";
import HomeInput from "./components/HomeInput";
import HomeCondition from "./components/HomeCondition";
import HomeContent from "./components/HomeContent";
import HomePagination from "./components/HomePagination";

const Home = () => {
  return (
    <>
      <HomeInput />
      <HomeCondition />
      <HomeContent />
      <HomePagination />
    </>
  );
};

export default Home;
