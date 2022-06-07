const CONSTANT = 5;
CONSTANT=3;
console.log(CONSTANT) //error occurs because we cannot change a constant value once declared


//const a = {name:'Sirine', adresse:'Tunis'};
console.log(typeof(a))
console.log(Array.isArray(a))

// //increment
var num = 5;
// num = num+1;
// num +=1;
console.log('increment',++num)


// //Decrement
var num2= 2;
// num = num-1;
// num -=1;
console.log('increment',++num)
console.log('Decrement',--num)
//console.log('before the increment',num++)

// //Increment with n 
let n = 3;
y += n;
console.log(y)


// // declare a function
// //1 we declare the function
// function sum (a,b){
//     return a+b;
// }
// //2 invoke the function (appel pour l'exécution)
// sum(1,2) //arguments

var a =2;
var b= 3;
//2nd déclaration 
const sum =function(){
   // let a = 1;
   // let b = 2;
    return a+b;
}

console.log(sum(a,b))

const arr =[1,3,8,9]
console.log(arr.length)
 let x = 'Hello';
 let y='appollos';
 phrase = x+' '+y;
 console.log(phrase)

//  let tab = [1,2,3,8,9,123];
//  var NBR_OFF_PAIR = 0;

//   //Boucle For -- méthode 1
  let summ = 0;
  for(let i=0; i<tab.length;i++){
      sum += tab[i];
  }
 

//  //Boucle For -- méthode 2
 for(let i  in tab){
     if(tab[i]%2 ===0){
        NBR_OFF_PAIR++;
     }

 }

//  //Boucle For -- méthode 3
 for(let value  of tab){
    if(value%2 ===0){
       NBR_OFF_PAIR++;
    }

 }
 //console.log('value',sum)
//console.log(NBR_OFF_PAIR)
// console.log(`la somme tottale est ${sum}`)


//  //sum using while
 let i = 0;
  while(i<tab.length){
     sum += tab[i];
     i++;
 }
 

  do{
    sum += tab[i];
    i++;
 } while(i<tab.length)
 console.log(sum)



 const colors = 'blue';

//using if statement

 if(colors=='red'){
     console.log(`color is red`)
 }
 else if (colors ==='blue') {
     console.log('the color is blue')
 }

 else{
     console.log('color is nor red nor blue')
 }

// //Switch

 switch (colors){
     case 'red':
        console.log(`color is red`);
        break;

    case 'blue' : 
    console.log('the color is blue');
    break

    default : 
    console.log('color is nor red nor blue');
 }

 const obj = {
     name:'Saif',
     age:25,
     greet : function (){return `hello ${this.name}`}

 }

 //To access the value of key
 console.log('obj',obj) //1
 console.log(obj.name)
 console.log(obj["name"])
 console.log(obj.greet()) //2 we can put different data types
 console.log('type',typeof(null))

 //modify value of key object
 obj.name = "Houda";
console.log(obj.name) 

//add key
obj.adresse = "Mahdia";
console.log(obj);


