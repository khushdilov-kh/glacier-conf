export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}

export function isPlaceholder(value?: string | null): boolean {
  if (!value) return true;
  const normalized = value.toLowerCase();
  return normalized.includes("to be confirmed") || normalized.includes("tbc") || normalized.includes("[");
}