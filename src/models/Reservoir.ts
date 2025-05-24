export interface Reservoir {
    use ( amount: number ): void;
    refill ( amount: number ): void;
    getLevel (): number;
}