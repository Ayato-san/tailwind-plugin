// // @ts-expect-error missing types
// import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette.js'
import plugin from 'tailwindcss/plugin.js'
import type { Config, PluginAPI } from 'tailwindcss/types/config.js'

import { flattenColorPalette } from '../lib/flatten_color_palette.js'

function commonTheme(
  theme: <TDefaultValue = Config['theme']>(
    path?: string,
    defaultValue?: TDefaultValue
  ) => TDefaultValue
) {
  return {
    content: 'var(--tw-content)',
    position: 'fixed',
    zIndex: '-1000',
    width: theme('width')?.screen || '100vw',
    height: theme('height')?.screen || '100vh',
    backgroundSize: 'var(--trendy-bg-size,40px) var(--trendy-bg-size,40px)',
  }
}

const bgDefault = { zIndex: '-10001', position: 'absolute' }

const trendyBackground = plugin(
  ({ addComponents, matchUtilities, theme }: PluginAPI) => {
    addComponents({
      '.bg-dots': bgDefault,
      '.bg-dots::after': {
        ...commonTheme(theme),
        backgroundImage:
          'radial-gradient(var(--bg-trendy-color,rgba(0,0,0,.5)) var(--bg-trendy-thickness,1px), transparent 0)',
        maskImage: 'radial-gradient(black 30%, transparent 80%)',
      },
      '.bg-squares': bgDefault,
      '.bg-squares::after': {
        '--transparent-pos-1':
          'round(down,calc(var(--trendy-bg-size,40px) / 2 - var(--bg-trendy-thickness,2px) / 2),1px)',
        '--transparent-pos-2':
          'calc(var(--trendy-bg-size,40px) / 2 + var(--bg-trendy-thickness,2px) / 2)',
        '--color-pos-1': 'calc(var(--transparent-pos-1) + 1px)',
        '--color-pos-2': 'calc(var(--transparent-pos-2) - 1px)',
        ...commonTheme(theme),
        'backgroundImage':
          'linear-gradient(to top, transparent var(--transparent-pos-1), var(--bg-trendy-color,rgba(0,0,0,.15)) var(--color-pos-1), var(--bg-trendy-color,rgba(0,0,0,.15)) var(--color-pos-2), transparent var(--transparent-pos-2)), linear-gradient(to left, transparent var(--transparent-pos-1), var(--bg-trendy-color,rgba(0,0,0,.15)) var(--color-pos-1), var(--bg-trendy-color,rgba(0,0,0,.15)) var(--color-pos-2),transparent var(--transparent-pos-2))',
        'backgroundPositionY': 'calc(var(--trendy-bg-size,40px) / 4 * -1)',
        'maskImage': 'radial-gradient(black 20%, transparent 90%)',
      },
    })
    matchUtilities(
      {
        'bg-trendy': (value) => ({
          '--bg-trendy-color': value,
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    )
    matchUtilities(
      {
        'trendy-thickness': (value) => ({
          '--bg-trendy-thickness': value,
        }),
      },
      { values: theme('bgTrendyThickness') }
    )
    matchUtilities(
      {
        'trendy-size': (value) => ({
          '--trendy-bg-size': value,
        }),
      },
      { values: theme('bgTrendySize') }
    )
  },
  {
    theme: {
      bgTrendyThickness: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
        10: '10px',
      },
      bgTrendySize: {
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
    },
  }
)

export default trendyBackground
