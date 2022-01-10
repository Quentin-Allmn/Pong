
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge des assets
     */
    preload(){
        this.load.image("cercle","assets/cercle.png")
        this.load.image("carre","assets/carre.png")
    }
    /**
     * création de la scéne
     */
    create() {
        this.width=1000;

        this.height=500;

        this.haut=this.physics.add.sprite(0,0,'carre').setOrigin(0,0);
        this.haut.setDisplaySize(this.width,20);
        this.haut.body.setAllowGravity(false);

        this.bas=this.physics.add.sprite(20,this.height-20,'carre').setOrigin(0,0);
        this.bas.setDisplaySize(this.width,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        this.balle=this.physics.add.sprite(this.width/2,this.width/2,'cercle').setOrigin(0,0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(0.9,1);

        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);
    }


    update(){

    }


}