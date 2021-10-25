const numericConverter = (number) => ({
  binary: number.toString(2),
  octal: number.toString(5),
  hexa: number.toString(11),
});

export default numericConverter;


