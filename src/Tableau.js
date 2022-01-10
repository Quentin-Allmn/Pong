/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-wooden-bridge', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        for (let t=1;t<=3;t++){
            this.load.image('gTree'+t, 'assets/level/ground/g-tree-'+t+'.png');
        }
        this.load.image('g-mushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('g-water', 'assets/level/ground/g-water.png');
        this.load.image('g-wooden-bridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('g-box-2', 'assets/level/ground/g-box-2.png');
        this.load.image('g-stone-3', 'assets/level/ground/g-stone-3.png');
        this.load.image('g-z-1', 'assets/level/ground/z11.png');
        this.load.image('g-z-2', 'assets/level/ground/z4.png');
        this.load.image('g-z-3', 'assets/level/ground/z13.png');
        this.load.image('g-fallen-tree-1', 'assets/level/ground/g-fellen-tree-1.png');


        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let h=1;h<=3;h++){
            this.load.image('filterFilm'+h, 'assets/level/filters/film/frame-'+h+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let a=1;a<=3;a++){
            this.load.image('bg-animation-'+a, 'assets/level/background-2/bg-animation/bg-animation-'+a+'.png');
        }
        //this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

        // liannes
        for(let a=1;a<=3;a++){
            this.load.image('g-vine-'+a, 'assets/level/ground/g-vine-'+a+'.png');
        }
        // herbe bg1
        for(let a=1;a<=4;a++){
            this.load.image('bg-grass-'+a, 'assets/level/background-1/bg-grass-'+a+'.png');

        }
        //filtre blood
        for(let h=1;h<=3;h++){
            this.load.image('filterBlood'+h, 'assets/level/filters/bloody/frame'+h+'.png');
        }
        //filtre snow
        for(let h=1;h<=5;h++){
            this.load.image('filterSnow'+h, 'assets/level/weather/snow/frame'+h+'.png');
        }
        //Charcter
        for (let i=1;i<=10;i++) {
            this.load.image('layer' + i, 'assets-characters/boy/boy_style_1/PNG/idle/Layer-' + i + '.png');
        }
        //Charcter2
        for (let i=1;i<=10;i++) {
            this.load.image('layer2-' + i, 'assets-characters/boy/boy_style_2/PNG/idle/Layer-' + i + '.png');
        }
        //enemy1idle
        for (let i=1;i<=10;i++) {
            this.load.image('layer3-' + i, 'assets-characters/enemy-1/PNG/idle/Layer-' + i + '.png');
        }
        //enemyrun
        for (let i=1;i<=8;i++) {
            this.load.image('layer3-run-' + i, 'assets-characters/enemy-1/PNG/run/Layer-' + i + '.png');
        }
        //enemy2
        for (let i=1;i<=6;i++) {
            this.load.image('layer4-' + i, 'assets-characters/enemy-2/PNG/idle/Layer-' + i + '.png');
        }
    }



    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        //let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        let bg2Terrain1=this.add.image(700,100, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès
        let bg2Tree3=this.add.image(800,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5;
        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-400,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        let bg1Terrain1=this.add.image(600,200, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let bg1tree3=this.add.image(202,350, 'bg1-tree-3').setOrigin(0,1);
        this.bg1Container.add(bg1tree3);

        // decor2
        /**
         * Terrains
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain4=this.add.image(bg1Terrain1.x+bg1Terrain1.width,250, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);
        let bg1Terrain2=this.add.image(bg1Terrain4.x+bg1Terrain4.width,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain2);
        /**
         * Pont
         * @type {Phaser.gameObject.Image}
         */
        let bgBridge=this.add.image(1000,200,'bg1-wooden-bridge').setOrigin(0,0);
        this.bg1Container.add(bgBridge);
        /**
         * Arbres
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(700,300, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        let bg1Tree2=this.add.image(bg1Terrain4.x+bg1Terrain4.width,300, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);
        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(880,380, 'gTree1').setOrigin(0,1);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        tree1.scale=0.7;
        tree1.angle=-0.5;

        let tree2=this.add.image(65,380, 'gTree2').setOrigin(0,1);
        // tree2.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree2);
        tree2.scale=0.7;

        let tree3=this.add.image(252,380, 'gTree2').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree3);
        /**
         * Champignon
         * @type {Phaser.GameObjects.Image}
         */
        let mushroom1=this.add.image(125,350, 'g-mushroom1').setOrigin(0,1);
        //mushroom1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(mushroom1);
        mushroom1.angle=5;
        /**
         * Caisse
         * @type {phaser.GameObjects.Image}
         */
        let box=this.add.image(450,340, 'g-box-2').setOrigin(0,1);
        this.groundContainer.add(box);
        box.angle=10;
        box.scale=0.6;

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid1.x+gMid1.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Eau
         * @type {Phaser.GameObjects.Image}
         */
        let gwater=this.add.image(gMid3.x+gMid3.width,375, 'g-water').setOrigin(0,0);
        this.groundContainer.add(gwater);
        /**
         * Pont
         * @type {Phaser.GameObjects.Image}
         */
        let gbridge=this.add.image(gMid3.x+gMid3.width-50,280, 'g-wooden-bridge').setOrigin(0,0);
        this.groundContainer.add(gbridge);
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(gwater.x+gwater.width-10,350, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        /**
         * liannes
         * @type {Phaser.GameObjects.Image}
         */
        let vine1=this.add.image(750,0, 'g-vine-1').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine1);

        let vine2=this.add.image(750,vine1.y+vine1.width, 'g-vine-2').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine2);

        let vine3=this.add.image(750,vine2.y+vine2.width, 'g-vine-3').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine3);

        let vine4=this.add.image(750,vine3.y+vine3.width, 'g-vine-3').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine4);

        let vine5=this.add.image(750,vine4.y+vine4.width, 'g-vine-2').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine3);

        let vine6=this.add.image(750,vine5.y+vine5.width, 'g-vine-3').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine6);

        let vine7=this.add.image(770,0, 'g-vine-1').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine7);

        let vine8=this.add.image(770,vine7.y+vine7.width, 'g-vine-3').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine8);

        let vine9=this.add.image(770,vine8.y+vine8.width, 'g-vine-3').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(vine9);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);

        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);

        // décor n°2

        // prmier plan
        /**
         * Terrains
         * @type {Phaser.GameObjects.Image}
         */
        let gMid5=this.add.image(gMid4.x+gMid4.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5);
        let gMid6=this.add.image(gMid5.x+gMid5.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid6);
        let gMid7=this.add.image(gMid6.x+gMid6.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid7);
        /**
         * Arbres
         * @type {Phaser.GameObjects.Image}
         */
        let tree4=this.add.image(gMid4.x+gMid4.width+40,380, 'gTree2').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree4);
        /**
         * Pierre
         * @type {Phaser.GameObjects.Image}
         */
        let stone3=this.add.image(gMid4.x+gMid4.width+40,300, 'g-stone-3').setOrigin(0,1);
        this.groundContainer.add(stone3);
        /**
         * Champignon
         * @type {Phaser.GameObjects.Image}
         */
        let mushroom2=this.add.image(gMid6.x+gMid6.width-40,380, 'g-mushroom1').setOrigin(0,1);
        //mushroom1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(mushroom2)
        /**
         * herbes bas
         * @type {Phaser.GameObjects.Image}
         */
        let gGrass5=this.add.image(gMid7.x+gMid7.width,480, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass5);
        let gGrass6=this.add.image(gGrass5.x+gGrass5.width,480, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass6);
        let gGrass7=this.add.image(gGrass6.x+gGrass6.width,480, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass7);
        /**
         * Arbre penché
         * @type {Phaser.GameObjects.Image}
         */
        let Ftree1=this.add.image(gMid6.x+gMid6.width+60,380, 'g-fallen-tree-1').setOrigin(0,1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(Ftree1);
        Ftree1.angle=5;
        /**
         * Terrains
         * @type {Phaser.GameObjects.Image}
         */
        let gMid8=this.add.image(gGrass7.x+gGrass7.width,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid8);
        /**
         * Zombies
         * @type {Phaser.GameObjects.Image}
         */
        let Zombie1=this.add.image(gMid7.x+gMid7.width,180, 'g-z-1').setOrigin(0,0);
        this.groundContainer.add(Zombie1);
        let Zombie2=this.add.image(gMid5.x+gMid5.width,200, 'g-z-2').setOrigin(0,0);
        this.groundContainer.add(Zombie2);
        let Zombie3=this.add.image(180,200, 'g-z-3').setOrigin(0,0);
        this.groundContainer.add(Zombie3);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA
        /**
         * bgAnimation
         * @type {Phaser.GameObjects.Sprite}
         */
        this.bgAnimation = this.add.sprite(0, 0, 'bg-animatin-1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'animation',
            frames: [
                {key:'bg-animatin-1'},
                {key:'bg-animatin-2'},
                {key:'bg-animatin-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bgAnimation.play('film');
        /**
         * bloodAnimation
         * @type {Phaser.GameObjects.Sprite}
         */
        this.bloodAnimation = this.add.sprite(0, 0, 'filterBlood1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'blood',
            frames: [
                {key:'filterBlood1'},
                {key:'filterBlood2'},
                {key:'filterBlood3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bloodAnimation.play('blood');
        /**
         * SnowAnimation
         * @type {Phaser.GameObjects.Sprite}
         */
        this.SnowAnimation = this.add.sprite(0, 0, 'filterSnow1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'filterSnow1'},
                {key:'filterSnow2'},
                {key:'filterSnow3'},
                {key:'filterSnow4'},
                {key:'filterSnow5'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.SnowAnimation.play('snow');
        /**
         * AnimationIdle1
         * @type {Phaser.GameObjects.Sprite}
         */


        this.idle= this.add.sprite(0, 55, 'layer').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'idle',
            frames: [
                {key:'layer1'},
                {key:'layer2'},
                {key:'layer3'},
                {key:'layer4'},
                {key:'layer5'},
                {key:'layer6'},
                {key:'layer7'},
                {key:'layer8'},
                {key:'layer9'},
                {key:'layer10'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.idle.play('idle');
        this.idle.scale=0.8;

        this.idle2 = this.add.sprite(500, 50, 'layer2-').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'idle2',
            frames: this.getFrames("layer2-",10),
            frameRate: 12,
            repeat: -1
        });
        this.idle2.play('idle2');
        this.idle2.scale=0.8;
        /*
                this.idle3 = this.add.sprite(800, 45, 'layer3-').setOrigin(0,0);
                console.log(frames)
                this.anims.create({
                    key: 'idle3',
                    frames: this.getFrames("layer3-",10),
                    frameRate: 12,
                    repeat: -1
                });
                this.idle3.play('idle3');
                this.idle3.scale= 0.75;
        */
        this.oiseau = this.add.sprite(300, 0, 'layer4-1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'idle4',
            frames: this.getFrames("layer4-",6),
            frameRate: 12,
            repeat: -1
        });
        this.oiseau.play('idle4');
        this.oiseau.scale= 0.5;

        this.enemy1run = this.add.sprite(800, 0, 'layer3-run-').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemy1run',
            frames: this.getFrames("layer3-run-",6),
            frameRate: 12,
            repeat: -1
        });
        this.enemy1run.play('enemy1run');
        this.enemy1run.scale= 0.8;

        this.tweens.add({
            targets: this.enemy1run,
            x: 900,
            duration: 3000,
            ease: 'Linear',
            yoyo: true,
            flipX: true,
            repeat: -1,
        });


        this.tweens.add({
            targets: this.oiseau,
            x: 600,
            duration: 3000,
            ease: 'Linear',
            yoyo: true,
            flipX: true,
            repeat: -1,
        });

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1900, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        this.bgAnimation.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
        this.bloodAnimation.scrollFactorX=0;
        this.SnowAnimation.scrollFactorX=0;

    }

    getFrames(prefix,length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }

    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed*4; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)

        document.title=this.oiseau.x;
    }


}