import defaultTheme from 'tailwindcss/defaultTheme.js'
import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

const spacing: Record<string, any> = { height: ['100vh', '100svh'], width: ['100vw', '100svw'] }

const defaultUtilities = plugin(
  ({ addVariant, matchUtilities, matchVariant, theme }: PluginAPI) => {
    addVariant('child', '& > *')
    addVariant('sibling', '& + *')
    matchVariant('not-data', (value) => `&:not([data-${value}])`)
    matchVariant('group-not-data', (value) => `:merge(.group):not([data-${value}]) &`)
    matchVariant('peer-not-data', (value) => `:merge(.peer):not([data-${value}]) ~ &`)
    matchUtilities(
      {
        'animation-delay': (value: string) => ({
          animationDelay: value,
        }),
      },
      { values: theme('animationDelay') }
    )
    matchUtilities(
      {
        'animation-duration': (value: string) => ({
          animationDuration: value,
        }),
      },
      { values: theme('animationDuration') }
    )
    matchUtilities(
      {
        'text-shadow': (value: string) => ({
          '--tw-text-shadow': value,
          '--tw-text-shadow-colored': value.replace(
            /rgb\(0 0 0 \/ 0\.[0-9]{1,2}\)/g,
            'var(--tw-shadow-color)'
          ),
          'textShadow': 'var(--tw-text-shadow-colored,var(--tw-text-shadow))',
        }),
      },
      { values: theme('textShadow') }
    )
    matchUtilities(
      {
        interact: (value: string) => ({
          '-webkit-user-drag': value,
          'user-drag': value,
          'user-select': value,
          'pointer-events': value,
        }),
      },
      { values: theme('interact') }
    )
    matchUtilities(
      // define images on tailwind.config.js
      {
        'bg-image': (value: string) => ({
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundOrigin: 'border-box',
          backgroundImage: "url('" + value + "')",
        }),
      },
      { values: theme('images') }
    )
  },
  {
    theme: {
      extend: {
        height: { screen: spacing.height },
        minHeight: { screen: spacing.height },
        maxHeight: { screen: spacing.height },
        width: { screen: spacing.width },
        minWidth: { screen: spacing.width },
        maxWidth: { screen: spacing.width },
      },
      animationDelay: defaultTheme.transitionDelay,
      animationDuration: defaultTheme.transitionDuration,
      textShadow: defaultTheme.boxShadow,
      interact: {
        none: 'none',
        initial: 'initial',
      },
    },
  }
)

export default defaultUtilities
