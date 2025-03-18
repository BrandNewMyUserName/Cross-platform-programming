import { Blender } from "./blender";
import { Toaster } from "./toaster";

export type KitchenApplianceName = 'Блендер' | 'Тостер';
export type KitchenApplianceNameMap = {
    [key: string]: KitchenApplianceName;
};

export const KitchenApplianceNameMap: KitchenApplianceNameMap = {
    Blender: 'Блендер',
    Toaster: 'Тостер'
} 
