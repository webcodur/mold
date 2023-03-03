const typeTest3 = () => {

  interface User {
    name:string;
    age:number;
  }

  interface Car {
    name:string;
    color:string;
  }

  interface Book {
    price:number;
  }

  const user : User = {name:"john", age: 10}
  const car : Car = {name:"bmw", color:"red"}
  const book : Book = { price: 10}

  function showName <T extends {name:string}>(data:T) : string {
    return data.name
  }

  return ( <>
    user : {showName(user)}
    car : {showName(car)}
    {/* book : {showName(book)} => error  */}
  </> );
}
 
export default typeTest3;