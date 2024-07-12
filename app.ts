//Array

//list of fruits

let fruit1 = "mango";
let fruit2 = "apple";
let fruits3 = " banana";
let fruits4 = "orange";

//string Array      //  0         1       2        3
let fruits:string[] = ["mango","apple","banana","orange"];

//number Array
let numArray :number[]= [1,2,3,4,5];

//boolean Array

let booleanArray: boolean[] = [true, false, true, false]

console.log(fruits);
console.log(numArray);
console.log(booleanArray);

// Mixed Array

let mixArray:(string|number|boolean)[]=[5,"mango",8,false]

console.log(mixArray);
console.log(mixArray[2]);

//Nested Array
//                             0       1       2
let nestedArray:number[][] =[[1,2,3],[4,5,6],[7,8,9]];
//  //                           0 1 2   0 1 2   0 1 2
  console.log(nestedArray);

  console.log(nestedArray[1][1]);

        // indexed Access

        let scores: number[] =[85,90,78,92];
        let firstScore = scores[0]  //85
        let lastScore = scores[3] //92
        console.log(scores.length);

//         //Methods of Array
          // Push()             add one or more elements at the end of an array

          let number: number[] = [1, 2, 3];
          number.push(4, 5);
          console.log(number); //[1,2,3,4,5]



//         //Pop()            remove the last element of and array and returns that element

        let number1: number[] = [1,2,3,4,5];
        console.log(number1);

        number1.pop();
        console.log(number1);

//shift   // removes frist element of an array

let number3: number[] = [1, 2, 3, 4];
let firstElement = number3.shift();
console.log(firstElement);

console.log(number3);

//unshift  //add one or more elements at the start

let number4: number[] = [2, 3, 4];
number4.unshift(0, 1);
console.log(number4); //[0,1,2,3,4]

//Slice()  //return selected elements in an array as new array
//                           0      1       2        3         4
let fruits1: string[] = ["mango", "apple", "grapes", "banana", "orange"];

console.log(fruits1.slice(0, 3));

//Splice // add and/or remove the elements, return deleted elements and overwrite the original array.
//                                0       1      2       3        4
let color: string[] = ["pink", "blue", "green", "yellow", "black"];

let detletedElement = color.splice(1, 2, "purple", "majenda");

console.log(color); // overwrite the original array

console.log(detletedElement); // return deleted elements
