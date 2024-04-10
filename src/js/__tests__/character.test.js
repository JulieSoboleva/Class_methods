import Bowman from '../class/bowman';
import Character from '../class/character';
import Daemon from '../class/daemon';
import Swordsman from '../class/swordsman';
import Undead from '../class/undead';
import Zombie from '../class/zombie';


test('check levelUp', () => {
    const bowman = new Bowman("Алекс");
    bowman.levelUp();
    const result = {
        attack: 30, defence: 30, health: 100, level: 2, name: 'Алекс', type: 'Bowman'
    };
    expect(bowman).toEqual(result);
});

test('check levelUp for dead man', () => {
    const zombie = new Zombie("Фредди");
    zombie.health = 0;
    expect(() => zombie.levelUp()).toThrow();
});

test('check name length', () => {
    expect(() => new Daemon("А")).toThrow();

});

test('check person type', () => {
    expect(() => new Character("Merlin", "Cook", 10, 50)).toThrow();
});

test('check method damage', () => {
    const undead = new Undead("Кощей");
    undead.damage(60);
    expect(undead.health).toBe(55);
});

test('check damage with health less zero', () => {
    const swordsman = new Swordsman("Вова");
    swordsman.damage(120);
    expect(swordsman.health).toBe(0);
});

test('check creating object', () => {
    const person = new Character('Петя', 'Undead');
    const correct = {
        attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
        name: 'Петя',
        type: 'Undead'
    }
    expect(person).toEqual(correct);
});