// Initializations : 

const num = [1,2,3,12,1,2,2,323,2,4,4,3,3,3,4,5,56,6,55,4,4,3,333];
const names = ['name1','name1','name2','name2','name2','name3','name3','name3','name4','name4','name5'];

//Removing Duplicates
    // 1. Using new Set()
    var output1 = [...new Set(num)];
    document.getElementById('originalArray').innerHTML = num;
    document.getElementById('out1').innerHTML = output1;

    // 2. Using map() method
    const result = [];
    var output2 = names.map(i => {
        !result.includes(i) && result.push(i);
        return result;
    });
    document.getElementById('originalNames').innerHTML = names;
    document.getElementById('out2').innerHTML = result;