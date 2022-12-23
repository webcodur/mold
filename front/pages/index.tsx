import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const moveToTest = () => {
    router.push('/test')
  }

  return (
    <>
      <h1>hello world</h1>
      <br></br>
      <Link href='/'>home</Link>
      <br></br>
      <Link href='/test'>Link-Test</Link>
      <br></br>
      <button onClick={moveToTest}>router-Test</button>
    </>
  )
}

// nextJS 페이지 이동 두 가지 방식 Link, Router