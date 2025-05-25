import { describe, it, expect, beforeEach } from 'vitest';
import { CoffeeMachine } from '../src/CoffeeMachine';
import { CoffeeRecipe, CoffeeType } from '../src/enums/CoffeeType';
import { BeanReservoir } from '../src/models/BeanReservoir';
import { MilkReservoir } from '../src/models/MilkReservoir';
import { WaterTank } from '../src/models/WaterTank';

describe( 'CoffeeMachine', () => {
    let machine: CoffeeMachine;

    const createMachine = (
        water = 2000,
        beans = 500,
        milk = 600
    ) => new CoffeeMachine(
        new WaterTank( water ),
        new BeanReservoir( beans ),
        new MilkReservoir( milk )
    );

    beforeEach( () => {
        machine = createMachine();
    } );

    describe( 'power management', () => {
        it( 'can be powered on and off', () => {
            expect( machine.isPoweredOn() ).toBe( false );
            machine.powerOnMachine();
            expect( machine.isPoweredOn() ).toBe( true );
            machine.powerOffMachine();
            expect( machine.isPoweredOn() ).toBe( false );
        } );

        it( 'throws a specific error when trying to brew while powered off', () => {
            expect( () => machine.brew( CoffeeType.COFFEE ) )
                .toThrow( 'Coffee Machine is OFF. Please turn it ON before brewing.' );
        } );
    } );

    describe( 'constructor logic (mutation-sensitive)', () => {
        it( 'brewCounts is initialized correctly by constructor (kills mutant)', () => {
            machine.powerOnMachine();
            for ( const type of Object.values( CoffeeType ) ) {
                const msg = machine.brew( type );
                expect( msg ).toBe( `Your ${type.toLowerCase()} is ready!` );
                expect( machine.getBrewCount( type ) ).toBe( 1 );
            }
        } );

        it( 'kills constructor mutations: brewCounts must initialize to 0', () => {
            for ( const type of Object.values( CoffeeType ) ) {
                expect( machine['brewCounts'].has( type ) ).toBe( true );
                expect( machine['brewCounts'].get( type ) ).toBe( 0 );
                machine.powerOnMachine();
                const msg = machine.brew( type );
                expect( msg ).toBe( `Your ${type.toLowerCase()} is ready!` );
                expect( machine.getBrewCount( type ) ).toBe( 1 );
            }
        } );
    } );

    describe( 'brew preconditions', () => {
        it( 'throws when there is not enough water', () => {
            machine = createMachine( 50 );
            machine.powerOnMachine();
            expect( () => machine.brew( CoffeeType.COFFEE ) ).toThrow( 'Not enough water!' );
        } );

        it( 'throws when there are not enough beans', () => {
            machine = createMachine( 2000, 10 );
            machine.powerOnMachine();
            expect( () => machine.brew( CoffeeType.COFFEE ) ).toThrow( 'Not enough beans!' );
        } );

        it( 'throws when there is not enough milk', () => {
            machine = createMachine( 2000, 500, 10 );
            machine.powerOnMachine();
            expect( () => machine.brew( CoffeeType.LATTE ) ).toThrow( 'Not enough milk!' );
        } );
    } );

    describe( 'edge cases (exact resource match)', () => {
        it( 'allows brewing when water is exactly equal to required amount', () => {
            const { water } = CoffeeRecipe[CoffeeType.COFFEE];
            machine = createMachine( water );
            machine.powerOnMachine();
            expect( () => machine.brew( CoffeeType.COFFEE ) ).not.toThrow();
        } );

        it( 'allows brewing when beans are exactly equal to required amount', () => {
            const { beans } = CoffeeRecipe[CoffeeType.COFFEE];
            machine = createMachine( 2000, beans );
            machine.powerOnMachine();
            expect( () => machine.brew( CoffeeType.COFFEE ) ).not.toThrow();
        } );

        it( 'allows brewing when milk is exactly equal to required amount', () => {
            const { milk } = CoffeeRecipe[CoffeeType.LATTE];
            machine = createMachine( 2000, 500, milk );
            machine.powerOnMachine();
            expect( () => machine.brew( CoffeeType.LATTE ) ).not.toThrow();
        } );
    } );

    describe( 'brew tracking', () => {
        it( 'tracks brew counts per coffee type', () => {
            machine.powerOnMachine();
            machine.brew( CoffeeType.COFFEE );
            expect( machine.getBrewCount( CoffeeType.COFFEE ) ).toBe( 1 );
        } );
    } );
} );
