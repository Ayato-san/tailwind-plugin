// @ts-expect-error missing types
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config.js'

import { Directions } from './enums/directions.js'
import { Steps } from './enums/steps.js'
import type { GradientUtilities, GradientValues } from './types/gradient_utilities.js'

const BASE_CLASS = 'gradient-mask'
function generateUtilities(): GradientUtilities {
  return Object.entries(Directions).reduce(
    (previous, [shorthand, [side, direction, fist, last]]) => {
      return {
        ...previous,
        [`${BASE_CLASS}-${shorthand}`]: (value: GradientValues) => ({
          [`--tw-gradient-${shorthand}`]: value + '%',
          [`--tw-gradient-${side}`]: `linear-gradient(${direction}, transparent, #f00 var(--tw-gradient-${fist},0%) calc(100% - var(--tw-gradient-${last},0%)), transparent)`,
          maskImage:
            'var(--tw-gradient-x, linear-gradient(to top, transparent,transparent), var(--tw-gradient-y, linear-gradient(to left, transparent,transparent)))',
        }),
      }
    },
    {}
  )
}

export default plugin(
  ({ matchUtilities, theme }: PluginAPI) => {
    matchUtilities(generateUtilities(), { values: theme('gradientSteps') })
  },
  {
    theme: {
      gradientSteps: Steps,
    },
  }
)
