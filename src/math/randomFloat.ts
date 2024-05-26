/**
 * Generates a random floating-point number between the specified minimum and maximum values.
 *
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (exclusive).
 * @returns A random floating-point number between the minimum and maximum values.
 */
export const randomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
