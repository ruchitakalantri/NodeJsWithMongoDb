
//var name = 'Max';
const name = 'Max';
// var is outdated
// use let
// can use const insted let : never plan on changging value
let age = 29;
const hasHobbies = true ;


// function summarizeUser(userName , userAge, userHobby) {

//     return (
//         'Name is ' +
//          userName + 
//          ', age is ' + 
//          userAge + 
//          ' and user has hobbbies : ' + 
//          userHobby
//          );
// }

// arrow function

const summarizeUser =  (userName , userAge, userHobby) => {
    return (
        'Name is ' +
         userName + 
         ', age is ' + 
         userAge + 
         ' and user has hobbbies : ' + 
         userHobby
         );
};

// shorter sytex

const add = (a,b) =>  a+b;
console.log(add(1,2));

// no argument

const addRandom = () => 1+2;
console.log(addRandom());

console.log(summarizeUser(name, age , hasHobbies));

// template literals
console.log(`My name is ${name} and I am ${age} years old.`);

// object

const person = {
    name : 'Max',
    age :29,
    greet() {
        console.log('Hi , I am ' + this.name);
    }
};

person.greet();
console.log(person);



const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

// map will create different array 

// object and array : reference type

hobbies.push('Programming');
console.log(hobbies);

// two operator : rest annd spreadd operator

// spread : 
// copy plus changes

// copy
const copiedArray = hobbies.slice();
console.log(copiedArray);

const copied = [hobbies];
console.log(copied);
// o-p : [ [ 'Sports', 'Cooking', 'Programming' ] ] : nested array
// spread operator (...)

const copied1 = [...hobbies];
console.log(copied1);
// o-p : [ 'Sports', 'Cooking', 'Programming' ] : copied array

// rest operator
// merge : then used as rest
// pukll : then use as spread 

const toArray = (arg1 , arg2, arg3) => {
    return[arg1,arg2,arg3];
};

console.log(toArray(1,2,3));

const toArray1 = (...args) => {
    return args;
};

console.log(toArray1(1,2,3,4));

// object - distructuring

// const printName = (personData) => {
//     console.log(personData.name);
// }

// printName(person);


const printName = ({name}) => {
    console.log(name);
}

printName(person);


// array distructureing

const [hobby1 , hobby2] = hobbies;
console.log(hobby1, hobby2);

// Asyc code : does not execute immediatelly take some time

setTimeout( () => {
   console.log('Timer is done'); 
} , 2000);

// Promise

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');