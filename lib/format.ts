export function formatUsd(value: number | null | undefined): string {
  if (typeof value !== 'number' || !isFinite(value)) return '-'
  if (value >= 1000) return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  if (value >= 1) return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (value >= 0.01) return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (value > 0) return '< $0.01'
  return '$0.00'
}