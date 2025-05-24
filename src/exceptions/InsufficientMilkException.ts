export class InsufficientMilkException extends Error {
    constructor( message: string ) {
        super( message );
        this.name = 'InsufficientMilkException';
    }
}