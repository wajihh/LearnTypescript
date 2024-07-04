//question 5
var num = 0;
var sum = 0;
while (num <= 2) {
    sum += num;
    num++;
}
console.log(sum);
//question 6
var myName = "wajih";
while (myName.length <= 10) {
    myName += "1";
}
console.log(myName);
//question 7
var myArray = ['ali', 'ahmed', 'illahibus'];
while (myArray.includes('ahmed')) {
    myArray.pop();
}
console.log(myArray);
//question 8
var myArray1 = ["ali"];
while (myArray1.includes('786')) {
    myArray1.push("786");
    console.log(myArray1);
} // nothing will print
//question 9
var myArray2 = ["ali"];
do {
    myArray2.pop();
} while (myArray2.includes('ali'));
console.log(myArray2);
//question 10
var myArray3 = ["ali", "ahmed", "tarique"];
do {
    for (var _i = 0, myArray3_1 = myArray3; _i < myArray3_1.length; _i++) {
        var my = myArray3_1[_i];
        console.log(my);
    }
} while (myArray3.length === 0);
