var config = {
    type: Phaser.AUTO, 
    width: 800, 
    height: 600, 

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Inicializa o jogo
var game = new Phaser.Game(config);

// Variáveis globais
var peixinho;

function preload() {
    // Carrega a imagem do peixe
    this.load.image('peixe', 'assets/Peixes/peixe_serio.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('simpsons','assets/simpsons.png');
}

function create() {
    
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(150, 100, 'simpsons').setScale(0.15);

    peixinho = this.add.image(400, 300, 'peixe')
    peixinho.setFlip(true, false);
}


function update() {
peixinho.x = this.input.x;
peixinho.y = this.input.y;
}