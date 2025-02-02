//// character counter tool


function Character(text){
    let length=text.length
    return length
}
const result=Character("good")
console.log(result,'result')


const txttoLowerCase=(text)=>{
    let lowerCase=text.toLowerCase()
    return lowerCase

}
console.log(txttoLowerCase('Dhiya is praticing'))

const txtToUpperCase=(text)=>{
    let upperCase=text.toUpperCase()
    return upperCase
}
console.log(txtToUpperCase('Dhivya is good'))

const sliceTxt=(txt,start,end)=>{
let slice=txt.slice(start,end)
return slice
}
console.log(sliceTxt("Dhivya",0,3))