import UseCallbackComp from "../component/UseCallbackComp"
import React, { useState, useCallback } from "react"

function useCallbackPage() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    console.log('getItems')
    return [number, number + 1, number + 2]
  }, [number])

  // const getItems = () => {
  //   console.log('getItems')
  //   return [number, number + 1, number + 2]
  // } 
  // => 테마 변경에도 getItem 호출되는 문제

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prev => !prev)}>테마 변경</button>
      <UseCallbackComp getItems={getItems} />
    </div>
  )
}

export default useCallbackPage
