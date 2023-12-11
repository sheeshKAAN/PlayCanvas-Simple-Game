
var Coin = pc.createScript('coin');

Coin.prototype.initialize = function() {
 this.entity.collision.on('triggerenter' , this.onCollision, this);
  };

Coin.prototype.onCollision = function(event) {
  this.entity.destroy();
  };