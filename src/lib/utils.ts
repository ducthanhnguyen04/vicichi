export function cn(
  ...inputs: Array<string | number | boolean | null | undefined>
): string {
  return inputs.filter((item) => typeof item === "string" && item.trim().length > 0).join(" ");
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}
