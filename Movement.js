var Movement = pc.createScript('movement');

Movement.attributes.add('speed',{ type : 'number' });
Movement.prototype.initialize = function() {
    console.log('Movement works!');
};

Movement.prototype.setMotion = function(dt) {

if(this.app.keyboard.isPressed(pc.KEY_W)){
this.entity.rigidbody.applyForce(
    0,
    0,
    -this.speed
   );
  }
  if(this.app.keyboard.isPressed(pc.KEY_S)){
this.entity.rigidbody.applyForce(
    0,
    0,
     this.speed
   );
  }
  if(this.app.keyboard.isPressed(pc.KEY_A)){
this.entity.rigidbody.applyForce(
    -this.speed,
    0,
    0,
   );
  }
  if(this.app.keyboard.isPressed(pc.KEY_D)){
this.entity.rigidbody.applyForce(
    this.speed,
    0,
    0,
   );
  }
};

Movement.prototype.update = function(dt){
    this.setMotion();
     };