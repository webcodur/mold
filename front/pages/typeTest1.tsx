const typeTest1 = () => {
  
  function getSize(arr:number[] | string[]):number{
    return arr.length
  }
  const arr1 = [1,2,3]
  getSize(arr1)
  
  const arr2 = ["a","b","c"]
  getSize(arr2)

  function getLength<T>(arr:T[]):number{
    return arr.length
  }
  const array1 = [1,2,3]
  getLength<number>(array1)
  
  const array2 = ["a","b","c"]
  getLength<string>(array2)

  return ( <>
  </> );
}
 
export default typeTest1;