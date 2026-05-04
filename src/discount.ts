export const calculateDiscount = (
  originalPrice: number, 
  discountPercentage: number
): number => {
  return originalPrice - originalPrice * discountPercentage / 100;
}