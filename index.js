function receivesAFunction(spy) {
    console.log(spy())
}
receivesAFunction(function() {return "i did"} );

function returnsANamedFunction() {
    return function namedFun() {
      console.log(`a name in function`);
    };
  }
let returnsAnAnonymousFunction = () => () => console.log("Inner function");
let innerFunction = returnsAnAnonymousFunctio();
innerFunction();