// Function.prototype.inherits = function inherits(ParentClass)  {
//   function Surrogate () {}
//   Surrogate.prototype = ParentClass.prototype;
//   this.prototype = new Surrogate();
//   this.constructor = this;
// };
const Util = {
  inherits (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.constructor = childClass;
  }
};

module.exports = Util;

// Util.inherits(asteroid, movingObject);

// import { Util } from './util.js';
