let name = "Max";
let age = 29;
let hasHobbies = true;
//template literal


console.log(`My name is ${name} and I am ${age} years old.`);
//const
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
/*const add = (a, b) => {
    return a+b;
    
};*/
const add = (a, b) => a + b;
console.log(add(1, 2));
const addOne = a => a + 1;
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());
/*
const summarizeUser = function(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}*/
/*function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}*/
console.log(summarizeUser(name, age, hasHobbies));
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
console.log(person);
console.log(person.name);
/*const printName = (personData)=> {
    console.log(personData.name);
}
*/
//or destructuring
const printName = ({ name }) => {
    console.log(name);
}
printName(person);

//const {name, age} = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//for (let hobby of hobbies) {
//    console.log(hobby);
//}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
//rest and spread
const copiedArray = [...hobbies];//copy array
console.log(copiedArray);

const copiedPerson = { ...person };
console.log(copiedPerson);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));

//async

const fetchData = callback => {
    setTimeout(()=> {
        callback('Done!');
    }, 1500);
};
setTimeout(()=> {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello');
console.log('Hi');


//promise
/*
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return Promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);

        });
}, 2000);
*/
console.log('Hello');
console.log('Hi');



