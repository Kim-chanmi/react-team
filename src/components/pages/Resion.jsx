/** @format */

import React from "react";
import { useEffect, useState } from "react";
import ResionCont from "../layout/ResionCont";

const Resion = () => {
  const [selectCategory, setSelectCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Kim-chanmi/react-team/main/src/components/utils/Seoul.json"
    )
      .then((response) => response.json())
      .then((result) => setSelectCategory(result.data))
      .catch((error) => console.log("error", error));
  }, []);

  return <ResionCont selectCategory={selectCategory} />;
};

export default Resion;
