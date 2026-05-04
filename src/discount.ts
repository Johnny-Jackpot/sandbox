export const calculateDiscount = (
  originalPrice: number, 
  discountPercentage: number
): number => {
  if (discountPercentage === 0) return originalPrice;

  return originalPrice - originalPrice * discountPercentage / 100;
}