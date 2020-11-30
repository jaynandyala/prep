function checkSubsequence(arr1, arr2) {
    let indexArr = [];
    let index = 0;
    let isValid = true;;
    while (index < arr2.length && !isValid) {
        const foundIndex = arr1.indexOf(arr2[index]);
        if (foundIndex != -1) {
            indexArr.push(foundIndex);
        }
        else{
            isValid = false;
            break;
        }
        index++;
    }
    if(isValid && indexArr === indexArr.sort()){
        isValid = true;
        console.log(true);
        return
    }
    isValid = false;
}
const arr1 = [1,2,3,4,5,6,7];
const arr2 = [7,5,7];
checkSubsequence(arr1, arr2) 