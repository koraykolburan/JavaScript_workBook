//Default Exports - We can only have ONE Default export in a FILE.

const message = () => {
     const name = "Freddie";
     const age = 51;
     const who = "guitarist";
     return name + ' is ' + age + ' years old.' + " And he is a great blues " + who + ".";
};

export default message;


//I exported this FILE(functions) at the bottom of new.js file in JS folder.