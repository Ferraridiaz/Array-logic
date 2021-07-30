// //1.Counting Number
const counting = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
        if(typeof arr[i] !=="number") return false;
    }
    return total;
}
console.log(counting([1,2,3,4,5,6]));
console.log(counting([1,2,3]));
console.log(counting([10,10,10,10,10]));
console.log(counting([]));



// 2.Reverse All Array
const reverse = (arr) => {
    let result = [];
    let ri = 0;
    for(let i = arr.length -1; i >= 0 ; i--) {
        let index = arr[i].toString();
        let reverseIndex = '';
        for(let j = index.length -1; j >= 0; j--) 
            reverseIndex += index[j];
        result[ri] = Number(reverseIndex);
        ri++;
    }

    return result;
}
console.log(reverse([123,456]));
console.log(reverse([456789, 332]));



// 3.Unique Array
const unique = (arr) => {
    let result = [];
    const exist = (number) => {
        for(let i = 0; i < result.length; i++) 
            if(result[i] === number) return false
        return true
    }
    
    for(let i = 0; i < arr.length; i++) {
        exist(arr[i]) ? 
                (arr[i]) ? result[result.length] = arr[i] 
                : '' 
            : '';
    }

    return result;
}
console.log(unique([1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]));



//4.Shopping Bubble Tea
