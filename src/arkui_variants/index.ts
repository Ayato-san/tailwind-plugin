import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

/**
 * Adds custom variants to the Tailwind CSS configuration.
 *
 * @param func - The `addVariant` function from the Tailwind CSS Plugin API.
 * @param name - The name of the variant to be added.
 * @param selector - The CSS selector associated with the variant.
 */
function overrideVariant(func: PluginAPI['addVariant'], name: string, selector: string) {
  func(name, `&${selector}`)
  func(`group-${name}`, `:merge(.group)${selector} &`)
  func(`peer-${name}`, `:merge(.peer)${selector} ~ &`)
}

/**
 * Adds custom match variants to the provided PluginAPI's matchVariant function.
 *
 * @param func - The `matchVariant` function from the PluginAPI.
 * @param name - The name to be used for the custom variant.
 */
function addMatchVariant(func: PluginAPI['matchVariant'], name: string) {
  func(name, (value) => `&[${name}=${value}]`)
  func(`group-${name}`, (value) => `:merge(.group):[${name}=${value}] &`)
  func(`peer-${name}`, (value) => `:merge(.peer):[${name}=${value}] ~ &`)
}

const arkuiVariants = plugin(({ addVariant, matchVariant }: PluginAPI) => {
  /** Add the variant to the data state open */
  overrideVariant(addVariant, 'data-state-open', ':is([open],[data-open],[data-state=open])')
  /** Add the variant to the data state closed */
  overrideVariant(
    addVariant,
    'data-state-closed',
    ':is([closed],[data-closed],[data-state=closed])'
  )
  /** Add the variant to the data state on */
  overrideVariant(addVariant, 'data-state-on', '[data-state=on]')
  /** Add the variant to the data state off */
  overrideVariant(addVariant, 'data-state-off', '[data-state=off]')
  /** Add the variant to the data state value under */
  overrideVariant(addVariant, 'data-state-under', '[data-state=under-value]')
  /** Add the variant to the data state expanded */
  overrideVariant(
    addVariant,
    'data-expanded',
    ':is([aria-expanded=true],[data-expanded],[data-state=expanded])'
  )

  /** Add the variant to the data current presence */
  overrideVariant(addVariant, 'data-current', '[data-current]')
  /** Add the variant to the data is copied presence */
  overrideVariant(addVariant, 'data-copied', '[data-copied]')
  /** Add the variant to the data inview presence*/
  overrideVariant(addVariant, 'data-inview', '[data-inview]')
  /** Add the variant to the data today presence */
  overrideVariant(addVariant, 'data-today', '[data-today]')
  /** Add the variant to the data highlighted presence */
  overrideVariant(addVariant, 'data-highlighted', '[data-highlighted]')
  /** Add the variant to the data dragging presence */
  overrideVariant(addVariant, 'data-dragging', '[data-dragging]')
  /** Add the variant to the data complete presence */
  overrideVariant(addVariant, 'data-complete', '[data-complete]')
  /** Add the variant to the data incomplete presence */
  overrideVariant(addVariant, 'data-incomplete', '[data-incomplete]')
  /** Add the variant to the data empty presence */
  overrideVariant(addVariant, 'data-empty', '[data-empty]')
  /** Add the variant to the data mounted presence */
  overrideVariant(addVariant, 'data-mounted', '[data-mounted]')
  /** Add the variant to the data paused presence */
  overrideVariant(addVariant, 'data-paused', '[data-paused]')
  /** Add the variant to the data overlap presence */
  overrideVariant(addVariant, 'data-overlap', '[data-overlap]')

  /** Add the variant to the html state selected */
  overrideVariant(addVariant, 'selected', ':is([aria-selected=true],[data-selected])')
  /** Add the variant to the html state pressed */
  overrideVariant(addVariant, 'pressed', ':is([aria-pressed=true],[data-pressed])')
  /** Add the variant to the html state invalid */
  overrideVariant(addVariant, 'invalid', ':is(:invalid,[invalid],[aria-invalid])')
  /** Add the variant to the html state hidden */
  overrideVariant(addVariant, 'hidden', '[hidden]')
  /** Add the variant to the html state hover */
  overrideVariant(addVariant, 'hover', ':is(:hover,[data-hover])')
  /** Add the variant to the html state disabled */
  overrideVariant(addVariant, 'disabled', ':is(:disabled,[disabled],[data-disabled])')
  /** Add the variant to the html state readonly */
  overrideVariant(addVariant, 'read-only', ':is(:read-only,[readonly],[data-readonly])')
  /** Add the variant to the html state checked */
  overrideVariant(
    addVariant,
    'checked',
    ':is(:checked,[checked],[data-checked],[aria-checked=true],[data-state=checked])'
  )
  /** Add the variant to the html state unchecked */
  overrideVariant(
    addVariant,
    'unchecked',
    ':is([data-unchecked],[aria-checked=false],[data-state=unchecked])'
  )
  /** Add the variant to the html state indeterminate */
  overrideVariant(
    addVariant,
    'indeterminate',
    ':is(:indeterminate,[data-indeterminate],[aria-checked=mixed],[data-state=indeterminate])'
  )
  /** Add the variant to the html state placeholder-shown */
  overrideVariant(
    addVariant,
    'placeholder-shown',
    ':is(:placeholder-shown,[data-placeholder-shown])'
  )
  /** Add the variant to the html state focus */
  overrideVariant(addVariant, 'focus', ':is(:focus,[data-focus])')
  /** Add the variant to the html state focus-visible */
  overrideVariant(addVariant, 'focus-visible', ':is(:focus-visible,[data-focus-visible])')
  /** Add the variant to the html state active */
  overrideVariant(addVariant, 'active', ':is(:active,[data-active])')

  /** Add the variant to the data scope */
  addMatchVariant(matchVariant, 'data-scope')
  /** Add the variant to the data part */
  addMatchVariant(matchVariant, 'data-part')
  /** Add the variant to the data orientation */
  addMatchVariant(matchVariant, 'data-orientation')
  /** Add the variant to the data index */
  addMatchVariant(matchVariant, 'data-index')
  /** Add the variant to the data color channel */
  addMatchVariant(matchVariant, 'data-channel')
  /** Add the variant to the data placement */
  addMatchVariant(matchVariant, 'data-placement')
  /** Add the variant to the data value */
  addMatchVariant(matchVariant, 'data-value')
  /** Add the variant to the data value human readable */
  addMatchVariant(matchVariant, 'data-valuetext')
  /** Add the variant to the data focusable */
  addMatchVariant(matchVariant, 'data-focusable')
  /** Add the variant to the data view */
  addMatchVariant(matchVariant, 'data-view')
  /** Add the variant to the data columns */
  addMatchVariant(matchVariant, 'data-columns')
  /** Add the variant to the data max */
  addMatchVariant(matchVariant, 'data-max')
  /** Add the variant to the data state */
  addMatchVariant(matchVariant, 'data-state')
  /** Add the variant to the data type */
  addMatchVariant(matchVariant, 'data-type')
  /** Add the variant to the data align */
  addMatchVariant(matchVariant, 'data-align')
  /** Add the variant to the data side */
  addMatchVariant(matchVariant, 'data-side')
  /** Add the variant to the data first */
  addMatchVariant(matchVariant, 'data-first')
  /** Add the variant to the data stack */
  addMatchVariant(matchVariant, 'data-stack')
  /** Add the variant to the data sibling */
  addMatchVariant(matchVariant, 'data-sibling')
  /** Add the variant to the data depth */
  addMatchVariant(matchVariant, 'data-depth')
  /** Add the variant to the data branch */
  addMatchVariant(matchVariant, 'data-branch')
  /** Add the variant to the data item */
  addMatchVariant(matchVariant, 'data-item')
})

export default arkuiVariants
