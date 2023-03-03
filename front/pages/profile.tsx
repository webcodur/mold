import { useSelector } from "react-redux";
import Login from "../component/LoginBtn";
import { useState } from "react";
import { useEffect } from "react";
import Quill from '../component/Quill'

// https://velog.io/@mael1657/Redux-toolkit%EC%9C%BC%EB%A1%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0

interface userType {
  user: userObjType;
}
interface userObjType {
  name: string;
  age: number;
  email: string;
}

const Profile = () => {
  const user: userObjType = useSelector((state: userType) => state.user);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('user', user)
  }, []);

  return (
    <>
      {isMounted && (
        <>
          <div>
            <h1>Profile Page</h1>
            <p> Name : {user.name} </p>
            <p> Age : {user.age} </p>
            <p> Email : {user.email} </p>
            <Login />
          </div>
        </>
      )}
      <Quill/>
    </>
  );
};

export default Profile;