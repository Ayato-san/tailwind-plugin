import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

const containerProps = {
  fullWidth: `minmax(var(--padding-inline),1fr)`,
  breakout: `minmax(0, calc((var(--breakout-max-width) - var(--content-max-width)) / 2))`,
  content: `min(100% - (var(--padding-inline) * 2), var(--content-max-width))`,
}

const grid = plugin(
  ({ addUtilities, addBase, theme }: PluginAPI) => {
    addUtilities({
      '.grid-container': {
        '--padding-inline': theme('paddingInline'),
        '--content-max-width': theme('contentMaxWidth'),
        '--breakout-max-width': theme('breakoutMaxWidth'),
        'grid-auto-rows': 'min-content',
        'grid-template-columns': `[full-start] ${containerProps.fullWidth} [breakout-start] ${containerProps.breakout} [content-start] ${containerProps.content} [content-end] ${containerProps.breakout} [breakout-end] ${containerProps.fullWidth} [full-end]`,
      },
      '.col-content': {
        gridColumn: 'content',
      },
      '.col-breakout': {
        gridColumn: 'breakout',
      },
      '.col-full': {
        gridColumn: 'full',
        gridTemplateColumns: 'inherit',
        rowGap: 'inherit',
      },
    }),
      addBase({
        '.grid-container > .col-full': {
          display: 'grid',
          gridTemplateColumns: 'subgrid',
        },
        ':is(.grid-container, .col-full) > :not(.col-breakout, .col-full)': {
          gridColumn: 'content',
        },
      })
  },
  {
    theme: {
      paddingInline: '2rem',
      contentMaxWidth: '90ch',
      breakoutMaxWidth: '110ch',
    },
  }
)

export default grid
