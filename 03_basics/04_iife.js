// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //this(;) semicolon is very important to run the another iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

