import * as React from "react";
import { useState } from "react";
import { message, Skeleton } from "antd";

import HomeInput from "./components/HomeInput";
import HomeCondition from "./components/HomeCondition";
import HomeContent from "./components/HomeContent";
import HomePagination from "./components/HomePagination";
import { findCodesApi } from "../../api/index";
import NoData from "../../base/no-data";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("created");
  const [label, setLabel] = useState("按创建时间排序");
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    search();
  }, []);

  const search = async () => {
    setLoading(true);
    try {
      const result: any = await findCodesApi(
        searchText,
        "",
        String(page),
        sortType
      );
      setData(result[0]);
      setTotal(result[1]);
    } catch (error) {
      message.error(`查询失败，${error}`);
    }
    setLoading(false);
  };

  const changeSearchText = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const changeSortType = (e: { key: string }) => {
    if (e.key === "1") {
      setSortType("created");
      setLabel("按创建时间排序");
      search();
    } else {
      setSortType("updated");
      setLabel("按更新时间排序");
      search();
    }
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      <HomeInput
        searchText={searchText}
        changeSearchText={changeSearchText}
        search={search}
      />
      <HomeCondition label={label} changeSortType={changeSortType} />
      <Skeleton loading={loading} active>
        {data && data.length ? (
          <>
            <HomeContent data={data} />
            <HomePagination total={total} changePage={changePage} />
          </>
        ) : (
          <NoData />
        )}
      </Skeleton>
    </div>
  );
};

export default Home;
