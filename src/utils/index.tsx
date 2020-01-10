import * as React from "react";
import Loadable from "react-loadable";
import Loading from "../base/loading/index";

export const asyncLoad = (loader: () => Promise<any>) => {
  return Loadable({
    loader,
    loading: props => {
      if (props.pastDelay) {
        return <Loading />;
      } else {
        return null;
      }
    },
    delay: 500
  });
};

export default asyncLoad;
