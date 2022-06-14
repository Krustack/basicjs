arr = [{name:"Wisanu"},{name:"Joseph"},{name:"Soranun"},{name:"Weerapat"}]
for(i in arr){
    let element = arr[i]
    console.log(element.name)
}
arr.map(element=>console.log("map",element.name)) //map จะสามารถreturn ค่า กลับได้

arr.forEach(element=>console.log("forEach",element.name)) //forEach จะไม่สามารถreturn ค่า กลับได้ แต่performance ทำงานจะเร็วกว่า

let fil=arr.filter(element=>element.name !== "Joseph")
console.log(fil)

const moneyArr = [10, 20, 30, 40]
const sumMoney = moneyArr.reduce((InitialValue,element) => {
  return InitialValue+element
}, 0) //ค่าเริ่มต้น default จะเป็น 0 ถ้า เป็น 0 ไม่ต้องใส่ก็ได้
console.log(sumMoney)