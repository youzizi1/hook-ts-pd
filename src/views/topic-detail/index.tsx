import * as React from "react";
import DetailInfo from './components/DetailInfo';
import HomeInput from '../home/components/HomeInput';
import HomeCondition from '../home/components/HomeCondition';
import HomeContent from '../home/components/HomeContent';
import HomePagination from "../home/components/HomePagination";

const TopicDetail = () => {
  return (
    <>
      <DetailInfo />  
      <HomeInput />
      <HomeCondition />
      <HomeContent />
      <HomePagination />
    </>
  )
};

export default TopicDetail;
