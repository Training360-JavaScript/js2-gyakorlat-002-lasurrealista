const isNeedToConvert = (previous, current) =>
  !Number.isSafeInteger(previous) || !Number.isSafeInteger(current);

const sumNumbersOrBigints = (previous, current) => (
  isNeedToConvert(previous, current)
    ? BigInt(previous) + BigInt(current)
    : previous + current);

const summarize = (...numbers) => numbers.reduce(
  (previous, current) => (Number(current)
    ? sumNumbersOrBigints(previous, current)
    : previous),
  0,
);

export default summarize;
