// @ts-expect-error missing types
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config.js'

const containerProps = {
  fullWidth: `minmax(var(--padding-inline),1fr)`,
  breakout: `minmax(0, calc((var(--breakout-max-width) - var(--content-max-width)) / 2))`,
  content: `min(100% - (var(--padding-inline) * 2), var(--content-max-width))`,
}

export default plugin(({ addUtilities, addBase }: PluginAPI) => {
  addUtilities({
    '.grid-container': {
      '--padding-inline': '2rem',
      '--content-max-width': '80ch',
      '--breakout-max-width': '100ch',
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
})
