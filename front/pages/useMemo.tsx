import React, { Component, useState } from "react";
import UseMemoComp from "../component/UseMemoComp";

const useMemo = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increaseNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseNumber = () => {
    setNumber((prev) => prev - 1);
  };

  const onChangeTextHandler = (e: any) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
        <input
          type="text"
          placeholder="Last Name"
          onChange={onChangeTextHandler}
        />
      </div>
      <UseMemoComp number={number} text={text} />
    </>
  );
};

export default useMemo;
