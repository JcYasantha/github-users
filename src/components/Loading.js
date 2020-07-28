import React, { Fragment } from "react";
import loading from "./loading.gif";

const Loading = () => {
  return (
    <Fragment>
      <img src={loading} alt='' style={{ width: "50px" }} />
    </Fragment>
  );
};

export default Loading;
