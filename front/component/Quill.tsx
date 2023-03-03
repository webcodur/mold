import { useRef, useState, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import React from 'react';

const Quill = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [contents, setContents] = useState("");
  const [elements, setElements] = useState<any>();

  useEffect(() => {
    setIsMounted(true);
    // console.log('contents', contents);

    // var ele = document.createElement('p');
    // ele.innerHTML = contents;
    // const loc = document.querySelector('#loc') as HTMLElement;
    // loc.appendChild(ele);

    const ele = React.createElement(
      'div', // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
      null, // 리액트 컴포넌트에 넣어주는 데이터 객체
      contents // 자식으로 넣어주는 요소들
    );
    setElements(ele)
  }, [contents]);

  const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
  
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    []
  );

  return (
    <>
      {isMounted && (
        <ReactQuill
          value={contents}
          onChange={setContents}
          modules={modules}
          theme="snow"
          placeholder="내용을 입력해주세요."
        />
      )}
      <div id='loc'>
        {elements}
      </div>
    </>
  );
};

export default Quill;
