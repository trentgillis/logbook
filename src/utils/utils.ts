export function range(start: number, end?: number) {
  let output = [];

  if (!end) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += 1) {
    output.push(i);
  }

  return output;
}
