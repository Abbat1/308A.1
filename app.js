// create a variable named global counter
/*let globalCounter = 0;

// function that increments variable, and call son its self. 
function incrementCalll(){
    try{
        globalCounterV++;
        console.log("Global counter V:",
        globalCounterV);
        incrementCalll();
    }catch (error){
        console.error("error occured:", error);
        console.log("value of global counter varuable at the time of error",  globalCounterV);

    }
}
incrementCalll();*/







//example from steven below


let counter =0

function recursiveFunc() {
    if(counter === 9000){
        console.log(counter);
        return counter;
    }
    counter++;
    recursiveFunc();
}
console.log(recursiveFunc());

// Part Two
 /*Write a recursive function that completely flattens an array of nested arrays,
  regardless of how deeply nested the arrays are.*/
  /*Once your recursive function is complete, trampoline it.*/

function flattenArray(arr){
    for(let i=0 <arr.length;i++;){
        if (Array.isArray(arr[i])){
            flattenArray(arr[i])}
            else{
                newarr.push(arr[i])}
            }
            return newarr
        }
        console.log(flattenArr(testArray))
        console.log(newarr)
    /* Part 3 
        -Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
        -*/