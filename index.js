function receivesAFunction(spy) {
    console.log(spy())
}
receivesAFunction(function() {return "i did"} );

let returnsANamedFunction = () => () => console.log("inner");
let inside = returnsANamedFunction();
inside();

let returnsAnAnonymousFunction = () => () => console.log("Inner function");
let innerFunction = returnsAnAnonymousFunctio();
innerFunction();