import { KitchenAppliance } from './KitchenAppliance';

export class Toaster extends KitchenAppliance {
    slotCount: number;

    constructor(name: string, power: number, weight: number, slotCount: number) {
        super(name, power, weight);
        this.slotCount = slotCount;
    }

    override displayInfo() {
        return (super.displayInfo() + `\nКількість слотів: ${this.slotCount}`);
    }
}