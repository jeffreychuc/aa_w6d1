import { Util } from './util.js';
import { MovingObject } from './moving_object.js';


const asteroid = function asteroid(params)  {
  this.color = 'gray';
  this.radius = params['radius'];
};

Util.inherits(asteroid, MovingObject);
