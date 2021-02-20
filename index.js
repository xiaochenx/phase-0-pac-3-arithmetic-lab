function add(x,y) {
    return x+y;
  } 
  console.log(add(1,2))

  function subtract(x,y) {
    return x-y;
  } 
  console.log(subtract(1,2))
  
  function multiply(x,y) {
    return x*y;
  } 
  console.log(multiply(1,2))

  function divide(x,y) {
    return x/y;
  } 
  console.log(divide(2,1))

  function increment(a) {
    return a+= 1;
  } 
  console.log(increment(2))

  function decrement(a) {
    return a-= 1;
  } 
  console.log(decrement(2))

  function makeInt(n){
    return parseInt(n, 10);
 }
 console.log(parseInt('2'));

 function preserveDecimal(n){
    return parseFloat(n);
 }
 console.log(parseFloat('2.22'));