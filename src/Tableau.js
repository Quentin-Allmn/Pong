
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

        this.haut=this.physics.add.image(0,0,'carre').setOrigin(0,0);
        this.haut.setDisplayOrigin(this.width,20);

        this.bas=this.physics.add.image(20,150,'carre').setOrigin(0,0);
        this.bas.setDisplayOrigin(this.width,20);

        this.balle=this.physics.add.image(this.width/2,this.width/2,'cercle').setOrigin(0,0);
        this.balle.setDisplayOrigin(20,20);
    }

    update(){

    }


}