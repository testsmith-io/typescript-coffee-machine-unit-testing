export enum CoffeeType {
    COFFEE = 'COFFEE',
    ESPRESSO = 'ESPRESSO',
    DOUBLE_ESPRESSO = 'DOUBLE_ESPRESSO',
    LATTE = 'LATTE',
    CAPPUCCINO = 'CAPPUCCINO',
    MACCHIATO = 'MACCHIATO',
}

export const CoffeeRecipe: Record<CoffeeType, { water: number; beans: number; milk: number }> = {
    [CoffeeType.COFFEE]: { water: 200, beans: 20, milk: 0 },
    [CoffeeType.ESPRESSO]: { water: 100, beans: 30, milk: 0 },
    [CoffeeType.DOUBLE_ESPRESSO]: { water: 150, beans: 40, milk: 0 },
    [CoffeeType.LATTE]: { water: 150, beans: 20, milk: 100 },
    [CoffeeType.CAPPUCCINO]: { water: 100, beans: 25, milk: 150 },
    [CoffeeType.MACCHIATO]: { water: 100, beans: 15, milk: 50 },
};