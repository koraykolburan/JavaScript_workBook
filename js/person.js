/* ------ There are two types of exports: NAMED Exports and DEFAULT Exports

Named Exports
We can create named exports TWO ways. 
a)In-line individually 
b)All At Once at the Bottom
*/

// a)In-line individually
export const name = "Tom";
export const age = 35;

// b)All At Once at the Bottom
const name2 = "Keith";
const age2 = 42;

export { name2, age2};

//To examine DEFAULT Export, look at the message.js file in JS Folder.
//Also I Imported THIS FILE(objects name, name2, age and age2) at the bottom of new.js file in JS Folder.