export function createCopy (...sources: any[]) {
  return Object.assign({}, ...sources);
};