
export abstract class KitchenAppliance {
    name: string;
    power: number;
    weight: number;

    constructor(name: string, power: number, weight: number) {
        this.name = name;
        this.power = power;
        this.weight = weight;
    }

    getPower(): number {
        return this.power;
    }

    displayInfo() {
        return (`Назва: ${this.name}\nПотужність: ${this.power} Вт\nВага: ${this.weight} кг`);
    }
}



