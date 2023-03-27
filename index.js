// Code your solution here
function findMatching(arr, name){
    const x = arr.filter(x => x.toUpperCase() === name.toUpperCase())
    return x
}
function fuzzyMatch(arr, letter){
    const name = arr.filter(x => x.startsWith(letter))
    return name ? name : undefined; 
}

function matchName(arr, name){
 const element = arr.filter(x => x.name === name)
 return element
}