// // @ts-expect-error missing types
// import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette.js'
import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

import { flattenColorPalette } from '../lib/flatten_color_palette.js'

const bgVars = {
  '--pattern-size': '20px',
  '--pattern-back': '#e5e5f7',
  '--pattern-front': '#444cf7',
}

const bgShort = {
  back: 'var(--pattern-back)',
  front: 'var(--pattern-front)',
  size: 'var(--pattern-size)',
  dSize: 'var(--double-size)',
  percentage: 'var(--percentage)',
}

function calc(a: any, b: number, symbol: '+' | '-' | '*' | '/' = '/') {
  return `calc(${a} ${symbol} ${b})`
}

const patternBackground = plugin(
  ({ addUtilities, matchUtilities, theme }: PluginAPI) => {
    matchUtilities(
      {
        'bg-pattern': (value: any) => ({
          '&:not(.pattern-fade)': { ...bgVars, ...value },
          '&.pattern-fade': { zIndex: '-10001', position: 'absolute' },
          '&.pattern-fade::after': {
            ...bgVars,
            ...value,
            content: 'var(--tw-content)',
            position: 'fixed',
            zIndex: '-1000',
            width: theme('width')?.screen || '100vw',
            height: theme('height')?.screen || '100vh',
          },
        }),
      },
      { values: theme('bgPattern') }
    )
    matchUtilities(
      {
        pattern: (value: string) => ({
          '&:not(.pattern-fade)': { '--pattern-size': value },
          '&.pattern-fade::after': { '--pattern-size': value },
        }),
      },
      { values: theme('bgPatternSize') }
    )
    matchUtilities(
      {
        pattern: (value: string) => ({
          '&:not(.pattern-fade)': { '--pattern-front': value },
          '&.pattern-fade::after': { '--pattern-front': value },
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    )
    matchUtilities(
      {
        bg: (value: string) => ({
          '&:not(.pattern-fade)': { '--pattern-back': value },
          '&.pattern-fade::after': { '--pattern-back': value },
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    )
    addUtilities({
      '.pattern-fade::after': {
        maskImage: 'radial-gradient(black 30%, transparent 80%)',
      },
    })
  },
  {
    theme: {
      bgPatternSize: {
        0: '0px',
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
        60: '60px',
        70: '70px',
        80: '80px',
        90: '90px',
        100: '100px',
      },
      bgPattern: {
        'polka': {
          '--percentage': calc(bgShort.size, 20),
          'background-color': bgShort.back,
          'background-image': `radial-gradient(${bgShort.front} ${bgShort.percentage}, ${bgShort.back} ${bgShort.percentage})`,
          'background-size': `${bgShort.size} ${bgShort.size}`,
        },
        'polka-2': {
          '--percentage': calc(bgShort.size, 20),
          '--double-size': calc(bgShort.size, 2, '*'),
          'background-color': bgShort.back,
          'background-image': `radial-gradient(${bgShort.front} ${bgShort.percentage}, transparent ${bgShort.percentage}), radial-gradient(${bgShort.front} ${bgShort.percentage}, ${bgShort.back} ${bgShort.percentage})`,
          'background-size': `${bgShort.dSize} ${bgShort.dSize}`,
          'background-position': `0 0,${bgShort.size} ${bgShort.size}`,
        },
        'cross': {
          '--double-size': calc(bgShort.size, 2, '*'),
          '--cross-size': calc(bgShort.size, 12.5),
          '--double-cross-size': calc(bgShort.size, -25),
          'background-color': bgShort.back,
          'background': `radial-gradient(circle, transparent 20%, ${bgShort.back} 20%, ${bgShort.back} 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, ${bgShort.back} 20%, ${bgShort.back} 80%, transparent 80%, transparent) ${bgShort.size} ${bgShort.size}, linear-gradient(${bgShort.front} var(--cross-size), transparent var(--cross-size)) 0 var(--double-cross-size), linear-gradient(90deg, ${bgShort.front} var(--cross-size), ${bgShort.back} var(--cross-size)) var(--double-cross-size) 0`,
          'background-size': `${bgShort.dSize} ${bgShort.dSize}, ${bgShort.dSize} ${bgShort.dSize}, ${bgShort.size} ${bgShort.size}, ${bgShort.size} ${bgShort.size}`,
        },
        'boxes': {
          '--percentage': calc(bgShort.size, 20),
          'background-color': bgShort.back,
          'background-image': `linear-gradient(${bgShort.front} ${bgShort.percentage}, transparent ${bgShort.percentage}), linear-gradient(to right, ${bgShort.front} ${bgShort.percentage}, ${bgShort.back} ${bgShort.percentage})`,
          'background-size': `${bgShort.size} ${bgShort.size}`,
        },
      },
    },
  }
)

export default patternBackground
