// collective variable
let Bio={
    Name : "Abid Ali Abbasi",
    FatherName :"Maqsood Ahmed Abbasi",
    Age : 16,
    Class : 10,
    Percentage : 78
 
};
   console.log(Bio)
// practical 
const product={
    Name : "Parker Jotter Standard CT Ball Pen BLACK",
    Rating : 4.5,
    Price :270 ,
};
console.log(product);
console.log("Deal Of The Day");
console.log("5%", 'OFF');
// Airtmetic Operators

let a = 12;
 let h = 6;

 //Values
 console.log(" a = ",a , "h = ",h)

 //Addition
 console.log("a + h =", a + h);

 //Subtraction
 console.log("a - h =", a - h);

 //Multiplication
 console.log("a * h =", a * h);

 //Division
 console.log("a / h =", a / h);

  //Remainder
 console.log("a % h =", a % h);

 //Power
 console.log("a ** h =", a ** h);

 //Post Increment
 console.log("a++ ", a++);
 //PreIncrement
 console.log("++a = ", ++a);

 //PostDecrement
 console.log("h-- =", h--);
 //PreDecrement
 console.log("--h =", --h);


// Assignment Operators

let num1 = 2;

let num2 = 6;

let num3 = 12;

let num4 = 16;

//Values
 console.log(" num1 = ",num1 , "num2 = ",num2
 ," num3 = ",num3 , "num4 = ",num4);


num1 +=3;
console.log("num1 =",num1);

num2 -=6;
console.log("num2 =", num2);

num3 *=8;
console.log("num3 =",num3);

num4 /=9;
console.log("num4 =", num4);

// Comparision Operators

let val1 = 4;

let val2 = 8;

let val3 = "4";

let val4 = 18;

//Values

 console.log(" val1 = ",val1 , "val2 = ",val2
 ," val3 = ",val3 , "val4 = ",val4);




console.log("val1 == val3",val1==val3 );


console.log("val3 != val1", val3 != val1);


console.log("val3 === val1", val3 === val1);


console.log("val3 !== val1", val3 !== val1);



console.log("val1 > val2",val1 > val2 );


console.log("val1 < val2",val1 < val2 );


console.log("val1 >= val2",val1 > val2 );


console.log("val1 <= val2",val1 > val2 );


//Logical Operators

let log1 = 6;
let log2 = 5;


//Values
 console.log(" log1 = ",log1 , "log2 = ",log2)

 
// Logical AND

let cond1 = log1 > log2;

let cond2 = log1 === 6;

console.log("cond1 && cond2 =",cond1 && cond2)

// Logical OR

let cond3 = log1 > log2;

let cond4 = log1 === 5;

console.log("cond3 || cond4 =",cond3 || cond4)

// Logical NOT

let cond5 = 12
let cond6 = 6

console.log("!(cond5 < cond6) =",!(cond5 < cond6))


// Condional Statments
// IF Statment

let age = 25;

if (age >= 18){
    console.log("You Can Vote")
}
if (age < 18){
    console.log("You Cannot Vote")
}


// If-Else Statments

let mode = "white"
let color;

if (mode ==="dark"){
    color = "black"
} else {
    color="white"
}

console.log(color);


//example

let val = 9
rem = val % 2

if (rem === 0 ){
    console.log(val,'Is Even Number')
} else {
    console.log(val,'Is Odd Number')
} 


//Else-if Statments

let age2 = 19

if (age2 <18) {
    console.log("junior")
} else if(age2>60){
    console.log("senior")
} else {
    console.log("middle")
}

// ternary operator   

let age3 = 35;

let result = age>=18 ? "adult" : "not adult"; 

console.log (result);



// Alert

//Prompt

input1 = prompt("Enter Your Name")

// One Time Alert

alert ("Hello " + input1);

// Practice of Promt and Alert

//          -1-

let prmt1 = prompt("Enter The Number")

if (prmt1 % 5 === 0){
    alert(prmt1 +" Is A Multiple Of 5")
} else{
    alert(prmt1 +" Is Not A Multiple Of 5")
}

//          -2-


let marks = prompt("Enter Your Percentage : ")

if (marks >=90 && marks <= 100){
    alert("You Got A Grade")
}else if (marks >=70 && marks <= 89){
    alert("You Got B Grade")
}else if (marks >=60 && marks <= 69){
    alert("You Got C Grade")
}else if (marks >=50 && marks <= 59){
    alert("You Got D Grade")
}else if (marks >=0 && marks < 49){
    alert("You Got F Grade")
}


// Loops 

// For Loop

for(let i = 1; i <= 10; i++){
    console.log("i =", i);
}

// Calculate the Sum Of 1 to 5

let sum = 0;
for(let i=1; i<= 5; i++){
    sum = sum + i;
}
console.log("sum = ", sum);

//infinite loop 


// for(let count = 1; count <= 0; count++){
//     console.log("count =", count);
// }

// While loop

let i = 1;
while(i <= 3){
    console.log ("i =", i);
    i++;
}

// Do-While Loop

let  l = 1;
do {
    console.log("Abid Ali");
    l++;
} while (l<=10);

// for-of loop

let str = ("Javascript")

let size = 0;
 for(let i of str){
    console.log("i = ", i);
    size ++; 
}
console.log("String Size =", size);

 // for-in loop

let student={
    Name : "Abid Ali",
    CGPA  : 0,
    isPass: false
};

for (let key in student){
    console.log("key =", key, "value =", student[key]);
}







