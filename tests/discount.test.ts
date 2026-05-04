import { calculateDiscount } from '../src/discount';

describe('calculateDiscount', () => {
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
});