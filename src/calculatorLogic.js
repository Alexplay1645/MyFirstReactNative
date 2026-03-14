export function calculatePercentage(percent, number) {
  if (isNaN(percent) || isNaN(number)) return NaN;
  return (percent / 100) * number;
}

export function calculateTrig(func, angle) {
  if (isNaN(angle)) return 'Error';
  const rad = (angle * Math.PI) / 180;
  try {
    switch (func) {
      case 'sin': return Math.sin(rad);
      case 'cos': return Math.cos(rad);
      case 'tan':
        if (Math.cos(rad) === 0) throw new Error('Undefined');
        return Math.tan(rad);
      case 'ctg':
        if (Math.sin(rad) === 0) throw new Error('Undefined');
        return 1 / Math.tan(rad);
      default: return 'Error';
    }
  } catch {
    return 'Undefined';
  }
}