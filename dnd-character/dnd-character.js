const round = n => {
    const i = (n - 10) / 2; 
    if (i >= 0) {
        return Math.trunc(i);
    } else {
        const truncated = Math.trunc(i);
        if (truncated === i) {
            return truncated;
        } else {
            return truncated - 1;
        }
    }
}

export const abilityModifier = num => {
    if (num < 3) throw new Error("Ability scores must be at least 3");
    if (num > 18) throw new Error("Ability scores can be at most 18");
    return round(num);
}

export class Character {
    constructor() {
        this.strength = Character.rollAbility();
        this.dexterity = Character.rollAbility();
        this.constitution = Character.rollAbility();
        this.intelligence = Character.rollAbility();
        this.wisdom = Character.rollAbility();
        this.charisma = Character.rollAbility();
        this.hitpoints = 10 + abilityModifier(this.constitution);
    }

    static rollAbility() {
        return Math.floor(Math.random() * (18 - 3) + 4);
    }
}