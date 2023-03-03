import Link from "next/link";
const Header = () => {
  return (
    <>
      <Link href="/">홈</Link> &nbsp; 
      <Link href="/profile">PROFILE</Link>
    </>
  );
};

export default Header;
