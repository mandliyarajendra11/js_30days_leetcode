/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let newArr= new Array();
    
    for(var i=0;i<arr.length;i++){
        var val=fn(arr[i],i);
        if(val)
        newArr.push(arr[i]);

    }
    return newArr;
};