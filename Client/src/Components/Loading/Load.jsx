import React, { useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import "../../main";

const override = {
  position: "fixed",
  top: "50%",
  left: "50%",
};

function Loading({ loading, setLoading }) {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [setLoading]);

  return (
    <div>
      <DotLoader
        className={"loader"}
        size={65}
        cssOverride={override}
        color={"#736a81e0"}
        loading={loading}
        speedMultiplier={1.7}
      />
    </div>
  );
}

export default Loading;
