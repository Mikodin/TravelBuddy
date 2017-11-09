export function FetchLatestExchangeRates() {
  return new Promise((resolve, reject) => {
    resolve(113.49);
  });
}

export function ConvertUsdToTarget(amountUsd, rate) {
  return amountUsd * rate;
}

export function ConvertTargetToBase(amountJpy, rate) {
  return amountJpy / rate;
}

export function PrettyPrintMoney(amount) {
  return amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
