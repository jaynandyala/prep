function checkSubsequence(arr1, arr2) {
    let indexArr = [];
    let index = 0;
    while (index < arr2.length) {
        const foundIndex = arr1.indexOf(item);
        if (foundIndex != -1) {
            indexArr.push(foundIndex);
        }
        index++;
    }
    if(indexArr === indexArr.sort()){
        console.log(true);
        return
    }
    console.log(false)
}
const arr1 = [1,2,3,4,5,6,7];
const arr2 = [2,5,7];
checkSubsequence(arr1, arr2) 