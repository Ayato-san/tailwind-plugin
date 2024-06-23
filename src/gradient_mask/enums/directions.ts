const Side = {
  y: ['y', 'to top', 'b', 't'],
  x: ['x', 'to left', 'r', 'l'],
}

export const Directions = {
  t: Side.y,
  r: Side.x,
  b: Side.y,
  l: Side.x,
} as const
