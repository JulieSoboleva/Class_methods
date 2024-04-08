import Bowman from '../bowman';
import Character from '../character';
import Daemon from '../daemon';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';


test('check levelUp', () => {
    const bowman = new Bowman("Алекс");
    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30);
    expect(bowman.defence).toBe(30);
});

test('check levelUp for dead man', () => {
    const zombie = new Zombie("Фредди");
    zombie.health = 0;
    try {
        zombie.levelUp();
    } catch (e) {
        expect(e.message).toBe("Нельзя повысить левел умершего");
    }
    

});

test('check name length', () => {
    try {
        new Daemon("Вольфшлегельштайнхаузенбергедорф");
    } catch (e) {
        expect(e.message).toBe("Имя должно иметь от 2 до 10 символов");
    }
});

test('check person type', () => {
    try {
        new Character("Merlin", "Cook", 10, 50);
    } catch (e) {
        expect(e.message).toBe("Не корректный тип персонажа");
    }
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