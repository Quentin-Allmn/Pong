
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

        this.haut=this.add.image(0,0,this.width,20,'carre').setOrigin(0,0);

        this.bas=this.add.image(20,150,this.width-20,20,'carre').setOrigin(0,0);

        this.balle=this.add.image(20,50,'cercle').setOrigin(0,0);
        this.balle.setDisplayOrigin(20,20);
    }

    update(){

    }


}