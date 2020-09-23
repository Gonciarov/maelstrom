import { slimeAttack } from "../../characterAnimation/slime/slime_attack";
import { slimeDeath } from "../../characterAnimation/slime/slime_death";
import { slimeIdle } from "../../characterAnimation/slime/slime_idle";
import Character from "../character_super/character_super";

const STARTING_HITPOINTS = 50;

export default class Slime extends Character {

    constructor(idleImage = slimeIdle, attackImage = slimeAttack, deathImage = slimeDeath, deathFrameNumber = 6, idleSourceY = 0, deathSourceY = 2, attackSourceY = 1){
        super(idleImage, attackImage, deathImage, deathFrameNumber, idleSourceY, deathSourceY, attackSourceY)
        this.name = 'Slime'
        this.hp = STARTING_HITPOINTS
        this.MAX_HP = STARTING_HITPOINTS
        this.money = 15
        this.attackSound = new Audio("https://opengameart.org/sites/default/files/s.mp3")
        this.deathSound = new Audio("http://freesoundeffect.net/sites/default/files/yucky-slime-sound-effect-31445313.mp3")
      }

}
