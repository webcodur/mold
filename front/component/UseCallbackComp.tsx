import React, { useEffect, useState } from "react";

const UseCallbackComp = ({ getItems }: any) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);
  
  return <>
    {items.map((item, index) => <div key={index}>{item}</div>)}
  </>;
};

export default UseCallbackComp;