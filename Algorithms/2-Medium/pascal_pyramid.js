function triangle(n) {
    let arr = [1];

    for (let i = 0; i < n; i++) {

        console.log(arr.join(' '));
        
        let newArr = [];

        for (let j = -1; j < arr.length; j++) {

            let left = arr[j];
            let right = arr[j + 1];
            left = left || 0;
            right = right || 0;
            newArr.push(left + right);

        }

        arr = newArr;
    } 
}
