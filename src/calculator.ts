/**
 * Represents a calculating device.
 */
export interface Calculator {
  add(num1: number, num2: number): number;
  subtract(num1: number, num2: number): number;
  multiply(num1: number, num2: number): number;
  divide(num1: number, num2: number): number;
}

/**
 * A very simple calculator.
 */
export class SimpleCalculator implements Calculator {

  /**
   * Adds two numbers.
   * @param num1
   * @param num2
   */
  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  /**
   * Subtracts two numbers.
   * @param num1
   * @param num2
   */
  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  /**
   * Multiplies two numbers.
   * @param num1
   * @param num2
   */
  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  /**
   * Divides two numbers.
   * @param num1
   * @param num2
   */
  divide(num1: number, num2: number): number {
    return num1 / num2;
  }
}
