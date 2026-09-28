export function isLeapYear(y){if(!Number.isInteger(y))throw new TypeError("Expected integer year");return y%4===0&&(y%100!==0||y%400===0);}
export const daysInYear=y=>isLeapYear(y)?366:365;
