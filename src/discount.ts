export const calculateDiscount = (
  originalPrice: number, 
  discountPercentage: number
): number => {
  if (discountPercentage === 0) return originalPrice;

  const result = originalPrice - originalPrice * discountPercentage / 100;

  return + result.toFixed(2);
}