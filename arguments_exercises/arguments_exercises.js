// const sum = function sum()  {
//   const args = Array.prototype.slice.call(arguments);
//   let total = 0;
//   for (var i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };
//
// console.log( sum(1, 2, 3, 4) === 10);
//
// const sum2 = function sum2(...args) {
//   let total = 0;
//   for (var i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };
// console.log(sum2(1, 2, 3, 4, 5) === 15);

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function () {
  const args = Array.prototype.slice.call(arguments);
  let that = this;
  return function () {
    const args2 = Array.prototype.slice.call(arguments);
    that.apply(args[0], args.slice(1).concat(args2));
  };
};

Function.prototype.myBind2 = function (...args)  {
  return (...args2)  =>  {
    this.apply(args[0], args.slice(1).concat(args2));
  };
};

Function.prototype.myBind3 = function () {
  const args = Array.prototype.slice.call(arguments);
  let that = this;
  return (...args2) => {
    that.apply(args[0], args.slice(1).concat(args2));
  };
};

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind3(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind3(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind3(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true

function curriedSum (numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers = numbers.concat(num);
    if (numArgs === numbers.length) {
      let total = 0;
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      console.log(total);
      return total;
    } else {
      return _curriedSum;
    }

  };
}
// const sum = curriedSum(4);
// sum(5); // => 88
// sum(35);
// sum(6)(42);
//
// const sum2 = curriedSum(4);
// sum2(5)(30)(20)(1); // => 56
//


Function.prototype.curry = function curry (numArgs) {

  let myArgs = [];
  let that = this;
  return function _curry() {
    let args = Array.prototype.slice.call(arguments);
    myArgs = myArgs.concat(args);
    if (numArgs === myArgs.length) {
      // return that(...myArgs);
      return that.apply(null, myArgs);
    }
    else {
      return _curry;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


// console.log(sumThree.curry(3)(4)(20)(6));
















//
