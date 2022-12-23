import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Test() {
    const router = useRouter()
    useEffect(()=>{
        console.log('바뀐 값 확인 :', router)
    }, [])

    return (
      <>
          <div>Test</div>
      </>
    )
}
  