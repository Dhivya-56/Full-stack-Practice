// let a=10
// let b=20

//Normal Function

// function simplecalculator(){
//   const data={
//     addition:a+b,
//     subtraction:a-b,
//     multiplication:a*b,
//     division:a/b
//   }
//   console.log(data)
//   return data
// }
// simplecalculator()

///Arrow function
// const simplecalculator=()=>{
//   const data={
//     addition:a+b,
//     subtraction:a-b,
//     multiplication:a*b,
//     division:a/b
//   }
//   console.log(data)
//   return data  
// }
// simplecalculator()


/// Function expression

// const simplecalculator=function(){
//   const data={
//     addition:a+b,
//     subtraction:a-b,
//     multiplication:a*b,
//     division:a/b
//   }
//   console.log(data)
//   return data  
// }
// simplecalculator()


/// Callback or Immediate Invoking Function

;(()=>{
  const data={
    addition:a+b,
    subtraction:a-b,
    multiplication:a*b,
    division:a/b
  }
  console.log(data)
  return data  
})()
