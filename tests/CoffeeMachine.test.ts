import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CoffeeMachine } from '../src/CoffeeMachine';
import { CoffeeType } from '../src/enums/CoffeeType';
import { BeanReservoir } from '../src/models/BeanReservoir';
import { MilkReservoir } from '../src/models/MilkReservoir';
import { WaterTank } from '../src/models/WaterTank';

describe( 'CoffeeMachine', () => {
    let machine: CoffeeMachine;
    let waterTank: WaterTank;
    let beanReservoir: BeanReservoir;
    let milkReservoir: MilkReservoir;

    beforeEach( () => {
        waterTank = new WaterTank( 500 );
        beanReservoir = new BeanReservoir( 100 );
        milkReservoir = new MilkReservoir( 300 );
        machine = new CoffeeMachine( waterTank, beanReservoir, milkReservoir );
    } );

    it( 'brews coffee when powered on', () => {
        machine.powerOnMachine();
        const result = machine.brew( CoffeeType.COFFEE );
        expect( result ).toBe( 'Your coffee is ready!' );
    } );

    it( 'throws when brewing while powered off', () => {
        expect( () => machine.brew( CoffeeType.COFFEE ) ).toThrowError();
    } );

    it( 'tracks brew counts per coffee type', () => {
        machine.powerOnMachine();
        machine.brew( CoffeeType.COFFEE );
        expect( machine.getBrewCount( CoffeeType.COFFEE ) ).toBe( 1 );
    } );
} );
