//Question-2
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//let personName = "faSih udDIn";
//console.log(personName.toLowerCase()); //LowerCase method
//console.log(personName.toUpperCase()); //UpperCase method

//By using for loop to titleCase a string

function titleCase(str){
 str = str.toLowerCase().split(' ');
 for (let i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

    
 }
 return str.join(' ');

}

console.log(titleCase("huSSAin aLi"));


