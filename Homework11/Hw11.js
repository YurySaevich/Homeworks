//Задание 1
var arr = [1, -1, 2, -2, 3, 5, 10, -11];
var posArr = arr.filter(function(num) {
    return num > 0;
});
console.log(posArr);

// Задание 2
var arr = [1, -1, 2, -2, 3, 5, 10, -11];
var foundPos = arr.find(function(pos) {
    return pos > 0;
});
console.log(foundPos);

//Задание 3
function isPolindrome(word){
    var wordArr1 = word.toLowerCase().split(''),
        wordArr2 = word.toLowerCase().split('').reverse(),
        count = 0;
    for( var i = 0; i < wordArr1.length; i++ ){
        if(wordArr1[i] === wordArr2[i]){
            count ++;
        }
        else break;
    }
    return (count == wordArr1.length) ? true : false;
}

isPolindrome('шалаШ');

//Задание 4
function areAnagrams (word1, word2) {
    if (word1.length !== word2.length) return false;
    var wordArr1 = word1.split('').sort(),
        wordArr2 = word2.split('').sort(),
        count = 0;
    for (var i = 0; i < wordArr1.length; i++){
        if(wordArr1[i] === wordArr2[i]){
            count ++;
        }
        else break;
    }
    return (count == wordArr1.length) ? true : false;
}
areAnagrams ('кукла','кулак');

// Задание 5
function divideArr(arr, size) {
    var miniarrs = [];
    for (var i = 0; i < arr.length; i += size) {
        miniarrs.push(arr.slice(i, i + size));
    }
    return miniarrs;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);