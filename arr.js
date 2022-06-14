arr = [{name:"Wisanu"},{name:"Joseph"},{name:"Soranun"},{name:"Weerapat"}]
for(i in arr){
    let element = arr[i]
    console.log(element.name)
}
arr.map(element=>console.log("map",element.name))
arr.forEach(element=>console.log("forEach",element.name))
let fil=arr.filter(element=>element.name !== "Joseph")
console.log(fil)