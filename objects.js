"use strict"

const options = {
    name:'test ',
    width: 1025,
    height: 1025,
    colors: {
        border:'black',
        bg:'red'
    },
    makeTest: function(){
         console.log("Test");
    }
};
options.makeTest();           
    console.log(Object.keys(options).length);
 const {border, bg} = options.colors; 
 console.log(border);
// console.log(options,name);


// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i  in options[key]){
//             console.log(`своство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`своство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);