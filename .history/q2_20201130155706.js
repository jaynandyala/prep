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