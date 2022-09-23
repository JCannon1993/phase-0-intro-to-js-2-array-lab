const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}
 function destructivelyRemoveLastCat(){
     cats.pop()
 }

 function destructivelyRemoveFirstCat(){
     cats.shift()
 }

 function appendCat(name){
     const newCats = [...cats , name]
     return newCats
 }

 function prependCat(name){
     const addCats = [name, ...cats]
     return addCats
 }

 function removeLastCat(){
     const blow = cats.slice(0,2)
     return blow
 }

 function removeFirstCat(){
     const bab = cats.slice(1)
     return bab
 }
