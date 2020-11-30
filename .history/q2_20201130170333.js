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
    console.log(indexArr)
    console.log(indexArr.sort())
    console.log(indexArr == indexArr.sort())
    if(indexArr === indexArr.sort()){
        console.log(true)
        return;
    }
    console.log(false)
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [7, 5, 3];
checkSubsequence(arr1, arr2) 