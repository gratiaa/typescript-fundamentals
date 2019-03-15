const hexToRgb = (hex: string): { [key: string]: number } => {
  if (hex.length !== 6 && hex.length !== 3) {
    throw new Error('hex length must be 3 or 6!');
  }

  const [r, g, b]: number[] = [0, 0, 0].map((value, i) => {
    return hex.length === 6 ? parseInt(hex.slice(i * 2, (i + 1) * 2), 16) : parseInt(hex.slice(i, i + 1).repeat(2), 16);
  });

  return { r, g, b};
};

const rgbToHex = (r: number, g: number, b: number): string =>
  [r, g, b].reduce(
    (accumulator, currVal) =>
      accumulator + (currVal >= 255 ? 'ff' : currVal <= 0 ? '00' : parseInt(currVal.toString(), 10).toString(16)),
    ''
  );

export { hexToRgb, rgbToHex };
