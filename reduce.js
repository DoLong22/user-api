const obj = {
    key1:'Supper Man',
    key2:'Wonder Woman',
    key3:'Spider Man'
}
// to
// const arr = [
//     {id:'key1',value:'Supper Man'},
//     {id:'key2',value:'Wonder Woman'},
//     {id:'key3',value:'Spider Man'}
// ]

function toList(object){
    object.reduce((arrMap,obj)=>{
        const key = obj.keys();
        return arrMap.push({id:key,value:obj[key]})
    },[])
}
console.log(toList(obj))