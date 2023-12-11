var CoinManager = pc.createScript('coinManager');

CoinManager.attributes.add('coinenitty',{ type :'entity'});
CoinManager.prototype.initialize = function() {
  this.coinEntity.enabled = false;

for(var i = 0; i < 10; i++){
    var posX = Math.random() * 10 - Math.random() * 10;
    var posY = 1;
    var posZ = Math.random() * 10 - Math.random() * 10;

    var coin = this.coinEntity.clone();
        coin.enabled = true;
        coin.setPosition(posX, posY, posZ);

    this.entity.addChild(coin);
    }
};
