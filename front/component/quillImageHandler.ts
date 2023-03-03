// 이미지를 업로드 하기 위한 함수
const quillImageHandler = (QuillRef:any) => {
  const input = document.createElement("input"); // 파일 업로드용 
  const formData = new FormData();
  let url = "";

  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  // 파일이 input 태그에 담기면 실행 될 함수
  input.onchange = async () => {
    const file = input.files;
    if (file !== null) {
      formData.append("image", file[0]);
      // 파일 이미지 서버 저장
      try {
        // const res = axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.
        // url = res.data.url;

        // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
        // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
        const range = QuillRef.current?.getEditor().getSelection()?.index;
        if (range !== null && range !== undefined) {
          let quill = QuillRef.current?.getEditor();
          quill?.setSelection(range, 1);
          quill?.clipboard.dangerouslyPasteHTML(
            range,
            `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
          );
        }

        // return { ...res, success: true };
      } catch (error) {
        // const err = error as AxiosError;
        // return { ...err.response, success: false };
      }
    }
  };
};

export default quillImageHandler