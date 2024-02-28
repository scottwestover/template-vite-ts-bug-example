import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const colorPipeline = (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.get('HueRotate');
        const bendPipeline = (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.get('BendPostFX') as Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;
        this.background = this.add.image(512, 384, 'background')

        this.logo = this.add.image(512, 300, 'logo').setPipeline(colorPipeline).setPostPipeline(bendPipeline);

        this.title = this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
