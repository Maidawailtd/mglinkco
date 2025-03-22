export function formatCurrency(amount: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatCompactCurrency(amount: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation: "compact",
    compactDisplay: "short",
  }).format(amount)
}

export function parseCurrency(value: string, currency = "USD", locale = "en-US"): number | null {
  // Remove currency symbol and other non-numeric characters
  const numericValue = value.replace(/[^\d.-]/g, "")
  const parsedValue = Number.parseFloat(numericValue)

  return isNaN(parsedValue) ? null : parsedValue
}

export function formatPercentage(value: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value / 100)
}

