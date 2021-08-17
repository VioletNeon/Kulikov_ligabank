const countCurrency = (amount, inputCurrency, outputCurrency, currentCurrency) => {
  const usdAmount = amount / currentCurrency[inputCurrency];
  return usdAmount * currentCurrency[outputCurrency];
};

export {countCurrency};
