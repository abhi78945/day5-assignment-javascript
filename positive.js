var inputArray = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

//Print the array in the console.
console.log(inputArray);

//making

let nums = [];
let resultDetails = inputArray.map(user=>{
    
    return user;
})


console.log(resultDetails);

var oddNumbers = inputArray.filter(num => num % 2 !== 0 );
    {
   

console.log(oddNumbers);
    }

    inputArray.forEach((el)=>{
        console.log(el**3)
    })