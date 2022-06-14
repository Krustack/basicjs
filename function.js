function myFunction(p1, p2) {
    return p1 * p2;   
  }
const myArrowFunction = (p1, p2) => p1 * p2; //arrow functionผลลัพธ์เหมือนกัน แต่เขียนได้สั้นกว่า


//callback
function myDisplay(number) {
    console.log(number)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
   myCalculator(5, 5, myDisplay);

  /*function myDisplay(some) {
    console.log(number)
  }
  
  function myCalculator(num1, num2) {
    reutrn num1 + num2;
   }
  
  let sum =myCalculator(5, 5);
  myDisplay(sum); */


 /*  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    setTimeout(()=>myCallback(num1 + num2),2000);
  } */
