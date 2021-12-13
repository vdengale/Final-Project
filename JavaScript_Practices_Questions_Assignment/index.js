////// Find the second Highest element from the array//////////
var arr = [12, 35, 1, 10, 34, 1] ;

var secondMax = function (arr) 
{     
    var max = Math.max.apply(null, arr); 
    //console.log(max);
    arr.splice(arr.indexOf(max), 1); 
    return Math.max.apply(null, arr); 
};

//var arr = [20, 12, 111, 215, 54, 78]; 
var max2 = secondMax(arr);
console.log(max2);
document.getElementById("demo").innerHTML=max2;

//-------------------------------------------------------------------------------------------//

/////Program to find out prime numbers in a given array.///////////

// creates a new array filled with elements that pass a test provided by a function.
// does not change the original array.
arr = arr.filter((number) => {   
    for (var i = 2; i <= Math.sqrt(number); i++) {       //squre root of that number       
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log(arr);
document.getElementById("prime").innerHTML=arr;

//--------------------------------------------------------------------------------------//
//Write a program for addition of each index of two array 
//Write a program to find the sum of two arrays
  var array1=[1 ,2, 3, 4]
  var array2=[2 ,3 ,4, 5]
  
   var sum= array1.map(function(num ,index){
         return num + array2[index];
   })
   console.log(sum)
   document.getElementById("add").innerHTML=sum;

//---------------------------------------------------------------------------------------//


var arr=[1,7,-6,15,7,9,0,2,-3]
//var arr=[7,15,-3]
var seq=[7,15,-3]
var temp=[];
var text ="";

for(let i=0; i<=arr.length;i++)
{
     for(let j=0 ;j<=seq.length ;j++){
      if(arr[i]==arr[j]){
       temp.push(seq[j])
       i++;
       console.log(temp);
      }  else {
        if(temp.length>0){
            text="not in sequence"
            console.log(text);
            break;
        }
      }
     }
     
}
if(JSON.stringify(seq)==JSON.stringify(temp)){
  console.log("in sequence")
}else{
  console.log("not in sequence")
}



//--------------------------------------------------------------------//
//Arrange the number into descending order
const numbers = [50, 100, 12, 5, 25, 17];
numbers.sort(function(a, b){return b-a});
console.log(numbers)
document.getElementById("number").innerHTML=numbers;
