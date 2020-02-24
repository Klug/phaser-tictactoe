export default class Intro extends Phaser.Scene {
	constructor() {
		super({
			key: 'Intro'
		});
	}
	preload() {
		this.load.audio('intro_music', ['/assets/audio/01-Opening.ogg']);
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('bgbox', '/assets/sprites/titlescreen/bgbox.png');
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
		this.load.image('tictactoe', '/assets/sprites/titlescreen/tictactoetitle.png');
		this.load.image('startbutton', '/assets/sprites/titlescreen/startbutton.png');

		var progress = this.add.graphics();
		const self = this;
		this.load.on('progress', function(value) {
			progress.clear();
			progress.fillStyle(0x42f456, 1);
			progress.fillRect(0, 300, 800 * value, 20);
		});

		this.load.on('complete', function() {
			progress.destroy();
		});
	}
	create() {

	}
	update(delta) {
		
	}
}
