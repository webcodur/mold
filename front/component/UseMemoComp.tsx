import React from "react";
import {useMemo} from "react";

interface useMemoType {
  number:number;
  text:string;
}

const getNum = (number:number) => {console.log("숫자 변동"); return number;};
const getStr = (text:string) => {console.log("글자 변동");return text;};

const UseMemoComp = ({ number, text }:useMemoType) => {
  const num = useMemo(()=>getNum(number),[number]);
  const str = useMemo(()=>getStr(text),[text]);
  return (
    <div> {num} | {str} </div>
  );
};

export default UseMemoComp;