/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for (let i = 0; i < image.length; i++) {
        let new_arr = []; 
        for (let j = 0; j < image[i].length; j++) {
            new_arr[image[i].length -1 - j] = 1 - image[i][j];
        }
        image[i] = new_arr;
    }
    
    return image;
    
};
