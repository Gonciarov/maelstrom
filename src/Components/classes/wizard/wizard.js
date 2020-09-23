import { wizardAttack } from '../../characterAnimation/wizard/wizard_attack.js';
import { wizardDead } from '../../characterAnimation/wizard/wizard_dead.js';
import { wizardIdle } from '../../characterAnimation/wizard/wizard_idle.js';
import Character from '../character_super/character_super.js';

const STARTING_HITPOINTS = 100;
const STARTING_GOLD = 0;
const VICTORIES = 0;
const STARTING_STRENGTH = 0;
const STARTING_DEFENCE = 0;

export default class Wizard extends Character {

  constructor(idleImage = wizardIdle, attackImage = wizardAttack, deathImage = wizardDead, deathFrameNumber = 7, idleSourceY = 0, deathSourceY = 0, attackSourceY = 0) {
    super(idleImage, attackImage, deathImage, deathFrameNumber, idleSourceY, deathSourceY, attackSourceY)
    this.name = 'placeholder'
    this.hp = STARTING_HITPOINTS
    this.MAX_HP = STARTING_HITPOINTS
    this.attackSound = new Audio("https://opengameart.org/sites/default/files/ig.mp3")
    this.deathSound = new Audio("https://opengameart.org/sites/default/files/8.mp3")
    this.current_avatar = wizardIdle
    this.money = STARTING_GOLD;
    this.victories = VICTORIES;
    this.strength = STARTING_STRENGTH;
    this.defence = STARTING_DEFENCE;
  }
}


