// function SuperClass (){}
// function SubClass (){}
//
// function Surrogate () {}
// Surrogate.prototype = SuperClass.prototype;
// SubClass.prototype = new Surrogate();
// SubClass.prototype.constructor = SubClass;


Function.prototype.inherits = function inherits(SuperClass) {
  function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject (name) {
  this.velocity = 10;
  this.name = name;
  let that = this;
  function getCurrVelocity()  {
    return that.velocity;
  }
}



function Ship (name, velocity) {

}
Ship.inherits(MovingObject);

function Asteroid () {

}
Asteroid.inherits(MovingObject);

Function.prototype.inherits = function inherits(SuperClass) {
  let SubClass = this;
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
};
