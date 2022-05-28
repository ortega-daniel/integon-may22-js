export function ellipsis(value) {
  if (!value) return;
  return value.length > 14 ? `${value.slice(0, 11)}...` : value;
}
