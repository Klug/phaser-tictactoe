export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		//**Audios
		this.load.audio('intro_music', ['/assets/audio/01-Opening.ogg']);
		this.load.audio('coin_sound', ['/assets/audio/sfx_coin_double1.wav']);
		this.load.audio('winning_sound', ['/assets/audio/sfx_sounds_powerup4.wav']);
		//**Images
			//title
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
			//background
		this.load.image('box_blank', '/assets/sprites/box_blank.png');
		this.load.image('box_xblue', '/assets/sprites/box_xblue.png');
		this.load.image('box_ored', '/assets/sprites/box_ored.png');
			//board
		this.load.image('boardbg', '/assets/sprites/board/boardbg.png');
		this.load.image('playagain', '/assets/sprites/board/playagain.png');
		this.load.image('wins', '/assets/sprites/board/wins.png');
		this.load.image('xIcon', '/assets/sprites/board/x.png');
		this.load.image('oIcon', '/assets/sprites/board/o.png');

	}
	create() {}
	update(time, delta) {}
}
