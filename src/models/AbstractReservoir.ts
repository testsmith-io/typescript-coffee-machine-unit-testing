import { Reservoir } from './Reservoir';

export abstract class AbstractReservoir implements Reservoir {
    protected level: number;
    protected capacity: number;

    constructor( capacity: number ) {
        this.capacity = capacity;
        this.level = capacity;
    }

    use ( amount: number ): void {
        if ( amount > this.level ) {
            throw new Error( 'Not enough resources!' );
        }
        this.level -= amount;
    }

    refill ( amount: number ): void {
        this.level = Math.min( this.level + amount, this.capacity );
    }

    getLevel (): number {
        return this.level;
    }
}