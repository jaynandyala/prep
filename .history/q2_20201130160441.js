function checkSubsequence(arr1, arr2) {
    let indexArr = [];
    let index = 0;
    let isValid;
    while (index < arr2.length && (isValid !== undefined || isValid !== false)) {
        const foundIndex = arr1.indexOf(arr2[index]);
        if (foundIndex != -1) {
            indexArr.push(foundIndex);
        }
        else {
            isValid = false;
            break;
        }
        index++;
    }
    if (isValid == undefined) {
        isValid = indexArr === indexArr.sort();
    }
    console.log(true);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [7, 5, 7];
checkSubsequence(arr1, arr2) 