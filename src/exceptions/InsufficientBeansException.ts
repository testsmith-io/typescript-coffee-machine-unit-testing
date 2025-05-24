export class InsufficientBeansException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InsufficientBeansException';
  }
}