
function checkIfArrayIsUnique (arr){
    //works from ES2015
    return (new Set(arr)).size === arr.length;
}

function findTargetWhile(arr, sumToFind){
    if(!checkIfArrayIsUnique(arr)){
        console.log("Array not valid. it contains duplicate values");
        return;
    }
    let result = [];
    let currentIteration = 0;
    let valueFound = false;
    while(currentIteration < arr.length && !valueFound){
        let innerIteration = 0;
        while(innerIteration < arr.length && !valueFound){
            const i = arr[currentIteration];
            const j = arr[innerIteration];
            if(j != i){
                if (i+j == sumToFind) {
                    result = [i,j];
                    valueFound = true;
                }
            }
            if(valueFound){
                break;
            }
            innerIteration++;
        }
        if(valueFound){
            break;
        }
        currentIteration++;
    }
    console.log(result);
}

const  inputArr1 = [0,1,2,3,4,5];
let targetSum1 = 8;

findTargetWhile(inputArr1, targetSum1);

const  inputArr2 = [1,11,25,32,99,86,14];
let targetSum2 = 100;

findTargetWhile(inputArr2, targetSum2);