import { CoffeeType, CoffeeRecipe } from './enums/CoffeeType';
import { BeanReservoir } from './models/BeanReservoir';
import { WaterTank } from './models/WaterTank';
import { MilkReservoir } from './models/MilkReservoir';
import { InsufficientBeansException } from './exceptions/InsufficientBeansException';
import { InsufficientMilkException } from './exceptions/InsufficientMilkException';
import { InsufficientWaterException } from './exceptions/InsufficientWaterException';

export class CoffeeMachine {
    private powerOn = false;
    private brewCounts = new Map<CoffeeType, number>();

    constructor(
        private waterTank: WaterTank,
        private beanReservoir: BeanReservoir,
        private milkReservoir: MilkReservoir
    ) {
        Object.values( CoffeeType ).forEach( type => this.brewCounts.set( type, 0 ) );
    }

    powerOnMachine () {
        this.powerOn = true;
    }

    powerOffMachine () {
        this.powerOn = false;
    }

    isPoweredOn (): boolean {
        return this.powerOn;
    }

    getBrewCount ( type: CoffeeType ): number {
        return this.brewCounts.get( type ) || 0;
    }

    brew ( type: CoffeeType ): string {
        if ( !this.powerOn ) {
            throw new Error( 'Coffee Machine is OFF. Please turn it ON before brewing.' );
        }

        const recipe = CoffeeRecipe[type];

        if ( this.waterTank.getLevel() < recipe.water ) throw new InsufficientWaterException( 'Not enough water!' );
        if ( this.beanReservoir.getLevel() < recipe.beans ) throw new InsufficientBeansException( 'Not enough beans!' );
        if ( this.milkReservoir.getLevel() < recipe.milk ) throw new InsufficientMilkException( 'Not enough milk!' );

        this.waterTank.use( recipe.water );
        this.beanReservoir.use( recipe.beans );
        this.milkReservoir.use( recipe.milk );

        this.brewCounts.set( type, this.getBrewCount( type ) + 1 );
        return `Your ${type.toLowerCase()} is ready!`;
    }
}
