//convert
const BinaryNumReg = new RegExp(/^[0-1]+$/);
const OctalNumReg = new RegExp(/^[0-7]+$/);
const DecimalNumReg = new RegExp(/^[0-9]+$/);
const HexadecimalNumReg = new RegExp(/^[0-9abcdef]+$/);
//calculate
const OperatorAbsenceReg = new RegExp(/[0-9]\(|\)[0-9]/);
// eslint-disable-next-line no-useless-escape
const OperatorsOneByOneReg = new RegExp(/[\+\-\*\^\%\÷]{2}/);
const BracketByBracket = new RegExp(/\)\(/);
const OpenBracket = new RegExp(/\(/, "g");
const CloseBracket = new RegExp(/\)/, "g");

export function Num(value, sys) {
  switch (+sys) {
    case 2:
      return BinaryNumReg.test(value);
    case 8:
      return OctalNumReg.test(value);
    case 10:
      return DecimalNumReg.test(value);
    case 16:
      return HexadecimalNumReg.test(value);
    default:
      return false;
  }
}

export function Expression(value) {
  if (OperatorAbsenceReg.test(value)) return false;
  if (OperatorsOneByOneReg.test(value)) return false;
  if (BracketByBracket.test(value)) return false;
  if (
    value.match(OpenBracket) &&
    value.match(CloseBracket) &&
    value.match(OpenBracket).length === value.match(CloseBracket).length
  )
    return false;
  return true;
}