
class Tableau extends Phaser.Scene{
    preload(){
        this.load.image("cercle","assets/cercle.png")
        this.load.image("carre","assets/carre.png")
    }
    create() {
        this.width=1000;
        this.height=500;

        this.haut=this.physics.add.sprite(0,0,'carre').setOrigin(0,0);
        this.haut.setDisplaySize(this.width,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        this.bas=this.physics.add.sprite(0,this.height-20,'carre').setOrigin(0,0);
        this.bas.setDisplaySize(this.width,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        this.balle=this.physics.add.sprite(this.width/2,this.height/2,'cercle').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.1,1.1);
        this.balle.setVelocityX(Phaser.Math.Between(200,-200));
        this.balle.setMaxVelocity(500);

        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
    }
    update(){
    if(this.balle.x > this.width) {
        this.balle.x=0
    }
    if(this.balle.y<0){
        this.balle.y=0
    }

    if(this.balle.y > this.height){
        this.balle.y = this.height
    }

    }
}
