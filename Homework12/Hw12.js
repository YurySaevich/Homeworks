// Задание 1
function convertNames (arr){
    return arr.map(function(v){
        var newObj = {};
        newObj.name = v;
        return newObj;
    });
 }
convertNames(['Kolya','Sasha','Rudik']);

// Задание 2
function currTime (arr2) {
   return arr2.reduce(function (r, v) {
        return 'Текущее время: ' + r + ' : ' + v;
    });
}
currTime(['00', '13', '24']);

// Задание 3

function isVowel(word){
    var wordArr1 = word.toLowerCase().split(''),
        wordArr2 = ['а','о','у','ы','э','е','ю','я','и'],
        count = 0;
    for( var i = 0; i < wordArr1.length; i++ ) {
        for (var j = 0; j < wordArr2.length; j++) {
            wordArr1[i] === wordArr2[j] ? count++ : count += 0;
        }
    }
    return 'Количество гласных: '+count;
}
isVowel('Преститижетатор');

// Задание 4

function countSentencesLetters (sentence){
    var sentenceArr = sentence.split(/[.?!]/g),
        sentenceClone = sentence.replace(/[\s,]/g,'').split(/[.?!]/g),
        lettersQuantityArr = [],
        newSentenceArr = [];
    for (var i = 0; i < sentenceArr.length; i++ ){
        if (sentenceArr[i] !== ''){
            newSentenceArr.push(sentenceArr[i].trim());
        }
        else continue;
    }
    for (var j = 0; j < sentenceClone.length; j++ ){
        if (sentenceArr[j] !== ''){
            lettersQuantityArr.push(sentenceClone[j]);
        }
        else continue;
    }
    for (var n = 0; n < newSentenceArr.length; n++){
        console.log (newSentenceArr[n] + ': Letters quantity is: ' + lettersQuantityArr[n].length);

    }
}
countSentencesLetters ('Привет, студент! Студент... Как дела, студент?');