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
  
  // Requirement #5
  it('should throw an error for discounts greater than 100%', () => {
    // Arrange
    const originalPrice = 100;
    const discountPercentage = 110;

    // Act, Assert
    expect(() => calculateDiscount(originalPrice, discountPercentage)).toThrow('Discount percentage cannot be > 100%');
  });
  
  // Requirement #6
  it('should throw an error for discounts less than 0%', () => {
    // Arrange
    const originalPrice = 100;
    const discountPercentage = -10;
    
    // Act, Assert
    expect(() => calculateDiscount(originalPrice, discountPercentage)).toThrow('Discount cannot be negative');
  });
  
  // Requirement #7
  it('should throw an error for non-numeric price inputs', () => {
    // Arrange
    const originalPrice = 'invalid' as any;
    const discountPercentage = 10;

    // Act, Assert
    expect(() => calculateDiscount(originalPrice, discountPercentage)).toThrow('Price must be a valid number');
  });
  
  // Requirement #8
  it('should throw an error for non-numeric discount inputs', () => {
    // Arrange
    const originalPrice = 100;
    const discountPercentage = 'invalid' as any;
    
    // Act, Assert
    expect(() => calculateDiscount(originalPrice, discountPercentage)).toThrow('Discount must be a valid number');
  });
  
  // Requirement #9
  it('should handle very small prices correctly', () => {
    // Arrange
    const originalPrice = 0.001;
    const discountPercentage = 1;
    const expectedDiscountedPrice = 0.01; // Should not go below 0.01

    // Act
    const result = calculateDiscount(originalPrice, discountPercentage);

    // Assert
    expect(result).toBe(expectedDiscountedPrice);
  });
  
  // Requirement #10
  it('should apply minimum discount amount when discount is less than minimum', () => {
    // Arrange
    const originalPrice = 100;
    const discountPercentage = 0.1; // 0.1% discount
    const expectedDiscountedPrice = 99; // Should apply minimum 1% discount

    // Act
    const result = calculateDiscount(originalPrice, discountPercentage);

    // Assert
    expect(result).toBe(expectedDiscountedPrice);
  });
  
  // Requirement #11
  it('should cap the maximum discount amount at $500', () => {
    // Arrange
    const originalPrice = 2500;
    const discountPercentage = 30; // Would normally be $750 off
    const expectedDiscountedPrice = 2000; // Should only apply $500 maximum discount

    // Act
    const result = calculateDiscount(originalPrice, discountPercentage);

    // Assert
    expect(result).toBe(expectedDiscountedPrice);
  });
});