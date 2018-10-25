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
    let initCopy = {};
    initCopy["old"] = init.old;
    initCopy["delta"] = init.delta;
    initCopy["new"] = init.new;

    return initCopy;
  }
}

const makeFiboGenerator = function(firstDigit,secondDigit){
  let lastNumber = 1;
  let secondLastNumber = 0;
  let number;
  let count = 1;
  if(firstDigit >0 && secondDigit >0){lastNumber = secondDigit;secondLastNumber = firstDigit;}
  if(firstDigit >0 && !secondDigit >=1){lastNumber = firstDigit}
  return function(){
    if(count == 1){ count++; return secondLastNumber;}
   if(count == 2){ count++; return lastNumber; }
    number = lastNumber + secondLastNumber;
    secondLastNumber = lastNumber;
    lastNumber = number;
    return number;
  }
}

const makeCycler = function(input){
  let temp = input.slice(0,input.length);
  return function(){
    let result = temp.shift();
    temp.push(result);
    return result;
  }
}


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
