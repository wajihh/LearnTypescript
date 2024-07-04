//question 5
let num=0
let sum=0
while(num<=2){sum+=num;num++
}
console.log(sum)
//question 6
let myName = "wajih";
while(myName.length<=10){myName+="1"}
console.log(myName)
//question 7
let myArray:string[]=['ali','ahmed','illahibus'];
while(myArray.includes('ahmed')){myArray.pop()}
console.log(myArray)
//question 8
let myArray1:string[]=["ali"];

while(myArray1.includes('786')){myArray1.push("786")
    console.log(myArray1)
}// nothing will print

//question 9
let myArray2:string[]=["ali"];
do {myArray2.pop()

}
while(myArray2.includes('ali'))
    console.log(myArray2)
//question 10
let myArray3:string[]=["ali","ahmed","tarique"]
do{
    for(let my of myArray3){
        console.log(my)
    }
} while(myArray3.length===0)