export class InsufficientWaterException extends Error {
    constructor( message: string ) {
        super( message );
        this.name = 'InsufficientWaterException';
    }
}