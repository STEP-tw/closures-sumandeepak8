const makeConstant = function(element){
  return function(){
    return element;
  }
}

const makeCounterFromN = function(number){
  return function(){
    return number++;
  }
}

const makeCounterFromZero = function(){
  let number = 0;
  return function(){
    return number++;
  }
}

const makeDeltaTracker = function(input){
  let init = {old:input,delta:0,new:input};
  return function(delta){
    if(delta == null)return init;
    init.delta = delta ;
    init.old = init.new;
    init.new = init.old + delta;
    return init;
  }
}
const makeFiboGenerator = undefined;

const makeCycler = undefined/*= function(input){
  return function(){
    let result = input.shift();
    input.push(result);
    return result;
  }
}*/


const curry = function(sum,input){
  return function(firstElement,secondElement){
    return sum(input,firstElement,secondElement);
  }
}

const compose = function(firstFuncRef,secondFuncRef){
  return function(arg1,arg2){
    return firstFuncRef(secondFuncRef(arg1,arg2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
