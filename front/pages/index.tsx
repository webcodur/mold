import Link from 'next/link'
import { useRouter } from 'next/router'
import CkScripts from '../component/Scripts'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState<any[]>([])
  const getJsonData = async () => {
    fetch("http://localhost:5000/todos")
    .then(res => res.json())
    .then(response => {
      setData(response)
    })
  }

  return (
    <>
      {/* <div>
        <button onClick={getJsonData}>getJsonData</button>
      </div>
      
      {data.map((ele, idx) => (<div key={idx}>
        {ele.content}
      </div>))} */}
    </>
  )
}