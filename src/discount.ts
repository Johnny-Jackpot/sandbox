const minDiscountedPrice = 0.01;
const minDiscountPercentage = 1;

export const calculateDiscount = (
  originalPrice: number, 
  discountPercentage: number
): number => {
  if (isNaN(originalPrice))      throw new Error('Price must be a valid number');
  if (isNaN(discountPercentage)) throw new Error('Discount must be a valid number');
  if (originalPrice < 0)         throw new Error('Price cannot be negative');
  if (discountPercentage > 100)  throw new Error('Discount percentage cannot be > 100%');
  if (discountPercentage < 0)    throw new Error('Discount cannot be negative');

  if (discountPercentage === 0) return originalPrice;
  discountPercentage = Math.max(minDiscountPercentage, discountPercentage);

  const result = originalPrice - originalPrice * discountPercentage / 100;
  return Math.max(+ result.toFixed(2), minDiscountedPrice);
}