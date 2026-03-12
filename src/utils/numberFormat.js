export const MAX_DIGITS = 10;

export const countDigits = (value) => {
  return value.replace(/\D/g, "").length;
};

export const formatNumber = (value) => {

  if (value === "") return "";

  const negative = value.startsWith("-");
  value = value.replace("-", "");

  const parts = value.split(".");
  let integer = parts[0];
  let decimal = parts[1];

  integer = integer.replace(/\s/g, "");

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, "\u2009");

  let result = decimal ? `${integer}.${decimal}` : integer;

  if (negative) {
    result = "-" + result;
  }

  return result;
};