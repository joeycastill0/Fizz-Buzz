function answer(num){
  let solution = [];

  for(var i = 1; i < num+1; i++){
    let a = i/3, b = i/5;
    if(isDivisible(a) && isDivisible(b)){
      solution.push("FizzBuzz");
    } else if (isDivisible(a)){
      solution.push("Fizz");
    } else if (isDivisible(b)){
      solution.push("Buzz");
    } else {
      solution.push(i);
    };
  }

  return solution;
}

function isDivisible(num){
  if(num % 1 == 0){
    return true;
  }

  return false;
}


console.log(answer(3))
console.log(answer(5))
console.log(answer(15))
