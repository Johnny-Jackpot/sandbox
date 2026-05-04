import { calculateDiscount } from '../src/discount';

describe('calculateDiscount', () => {
  // Requirement #1
  it('should apply the correct discount to the price', () => {
    // Arrange
    const originalPrice = 100;
    const discountPercentage = 20;
    const expectedDiscountedPrice = 80;

    // Act
    const result = calculateDiscount(originalPrice, discountPercentage);

    // Assert
    expect(result).toBe(expectedDiscountedPrice);
  });
  
  // Requirement #2
  it('should return the original price when discount is 0', () => {
    // Arrange
    const originalPrice = 50;
    const discountPercentage = 0;

    // Act
    const result = calculateDiscount(originalPrice, discountPercentage);

    // Assert
    expect(result).toBe(originalPrice);
  });
  
  // Requirement #3
  it('should handle decimal discounts correctly', () => {
    // Arrange
    const originalPrice = 100;
    const discountPercentage = 33.333;
    const expectedDiscountedPrice = 66.67;

    // Act
    const result = calculateDiscount(originalPrice, discountPercentage);

    // Assert
    expect(result).toBe(expectedDiscountedPrice);
  });
  
  // Requirement #4
  it('should throw an error for negative prices', () => {
    // Arrange
    const originalPrice = -50;
    const discountPercentage = 10;

    // Act, Assert
    expect(() => calculateDiscount(originalPrice, discountPercentage)).toThrow('Price cannot be negative');
  });
});