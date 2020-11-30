function checkSubsequence(arr1, arr2) {
    let indexArr = [];
    let index = 0;
    while (index < arr2.length) {
        const foundIndex = arr1.indexOf(arr2[index]);
        indexArr.push(foundIndex);
        index++;
    }
    if(indexArr.indexOf(-1) !== -1){
        console.log(false);
        return 
    }
    const sortedArr = indexArr.sort();
    if(indexArr == sortedArr){
        debugger
        console.log(true)
        return;
    }
    console.log(false)
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [3,2,1];
checkSubsequence(arr1, arr2) 