type KeyPairValue<T> = {
  [key: string]: T
}

type Colors = {
  [key: string]: string | Colors
}

export function flattenColorPalette(colors: Colors): KeyPairValue<string> {
  return Object.assign(
    {},
    ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(
      ([color, values]) =>
        typeof values === 'object'
          ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
              [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
            }))
          : [
              {
                [`${color}`]: values,
              },
            ]
    )
  )
}
