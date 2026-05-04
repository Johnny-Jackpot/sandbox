export const calculateDiscount = (
  originalPrice: number, 
  discountPercentage: number
): number => {
  if (originalPrice < 0) throw new Error('Price cannot be negative');

  if (discountPercentage > 100) throw new Error('Discount percentage cannot be > 100%');

  if (discountPercentage < 0) throw new Error('Discount cannot be negative');

  if (discountPercentage === 0) return originalPrice;

  const result = originalPrice - originalPrice * discountPercentage / 100;

  return + result.toFixed(2);
}