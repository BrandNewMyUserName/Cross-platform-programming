import { KitchenAppliance } from "./KitchenAppliance";
export class Blender extends KitchenAppliance {
    bladeCount: number;

    constructor(name: string, power: number, weight: number, bladeCount: number) {
        super(name, power, weight);
        this.bladeCount = bladeCount;
    }

    override displayInfo() {
        return (super.displayInfo() + `\nКількість лез: ${this.bladeCount}`);
    }
}