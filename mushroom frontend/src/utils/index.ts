export const capitalizeEachFirst = (value: string) =>
  value
    .split("_")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .reduce((prev, curr) => `${prev} ${curr}`);
