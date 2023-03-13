import Link from "next/link";
// import styled
// const HeaderLayout = styled.div``

const Header = () => {
  return (
    <>
      <Link href="/">홈</Link> <br/>
      <Link href="/wyziwig">wyziwig</Link> <br/>
      <Link href="/redux">redux</Link> <br/>
      <Link href="/pagination">pagination</Link> <br/>
      <Link href="/useCallback">useCallback</Link> <br/>
      <Link href="/useMemo">useMemo</Link> <br/>
    </>
  );
};

export default Header;
