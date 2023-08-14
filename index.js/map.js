// let obj = {
//     name: "kabeer",
//     10: "this is a number key"
// }



let data = new Map([
    ['name','peter'],
    [true, "this is a bool key in map"]

])

data.set('city', 'lahore')
// console.log(obj)
// console.log(data)


// console.log(data.size)


data.forEach((k,v)=>{
    console.log(k,v)
})