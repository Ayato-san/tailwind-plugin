import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

/**
 * Adds custom variants to the Tailwind CSS configuration.
 *
 * @param func - The `addVariant` function from the Tailwind CSS Plugin API.
 * @param name - The name of the variant to be added.
 * @param selector - The CSS selector associated with the variant.
 */
function overideVariant(func: PluginAPI['addVariant'], name: string, selector: string) {
  func(name, `&${selector}`)
  func(`group-${name}`, `:merge(.group)${selector} &`)
  func(`peer-${name}`, `:merge(.group)${selector} ~ &`)
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
  overideVariant(addVariant, 'data-state-open', ':is([open],[data-open],[data-state=open])')
  /** Add the variant to the data state closed */
  overideVariant(addVariant, 'data-state-closed', ':is([closed],[data-closed],[data-state=closed])')
  /** Add the variant to the data state on */
  overideVariant(addVariant, 'data-state-on', '[data-state=on]')
  /** Add the variant to the data state off */
  overideVariant(addVariant, 'data-state-off', '[data-state=off]')
  /** Add the variant to the data state value under */
  overideVariant(addVariant, 'data-state-under', '[data-state=under-value]')
  /** Add the variant to the data state expanded */
  overideVariant(
    addVariant,
    'data-expanded',
    ':is([aria-expanded=true],[data-expanded],[data-state=expanded])'
  )

  /** Add the variant to the data current presence */
  overideVariant(addVariant, 'data-current', '[data-current]')
  /** Add the variant to the data is copied presence */
  overideVariant(addVariant, 'data-copied', '[data-copied]')
  /** Add the variant to the data inview presence*/
  overideVariant(addVariant, 'data-inview', '[data-inview]')
  /** Add the variant to the data today presence */
  overideVariant(addVariant, 'data-today', '[data-today]')
  /** Add the variant to the data highlighted presence */
  overideVariant(addVariant, 'data-highlighted', '[data-highlighted]')
  /** Add the variant to the data dragging presence */
  overideVariant(addVariant, 'data-dragging', '[data-dragging]')
  /** Add the variant to the data complete presence */
  overideVariant(addVariant, 'data-complete', '[data-complete]')
  /** Add the variant to the data incomplete presence */
  overideVariant(addVariant, 'data-incomplete', '[data-incomplete]')
  /** Add the variant to the data empty presence */
  overideVariant(addVariant, 'data-empty', '[data-empty]')
  /** Add the variant to the data mounted presence */
  overideVariant(addVariant, 'data-mounted', '[data-mounted]')
  /** Add the variant to the data paused presence */
  overideVariant(addVariant, 'data-paused', '[data-paused]')
  /** Add the variant to the data overlap presence */
  overideVariant(addVariant, 'data-overlap', '[data-overlap]')

  /** Add the variant to the html state selected */
  overideVariant(addVariant, 'selected', ':is([aria-selected=true],[data-selected])')
  /** Add the variant to the html state pressed */
  overideVariant(addVariant, 'pressed', ':is([aria-pressed=true],[data-pressed])')
  /** Add the variant to the html state invalid */
  overideVariant(addVariant, 'invalid', ':is(:invalid,[invalid],[aria-invalid])')
  /** Add the variant to the html state hidden */
  overideVariant(addVariant, 'hidden', '[hidden]')
  /** Add the variant to the html state hover */
  overideVariant(addVariant, 'hover', ':is(:hover,[data-hover])')
  /** Add the variant to the html state disabled */
  overideVariant(addVariant, 'disabled', ':is(:disabled,[disabled],[data-disabled])')
  /** Add the variant to the html state readonly */
  overideVariant(addVariant, 'read-only', ':is(:read-only,[readonly],[data-readonly])')
  /** Add the variant to the html state checked */
  overideVariant(
    addVariant,
    'checked',
    ':is(:checked,[checked],[data-checked],[aria-checked=true],[data-state=checked])'
  )
  /** Add the variant to the html state unchecked */
  overideVariant(
    addVariant,
    'unchecked',
    ':is([data-unchecked],[aria-checked=false],[data-state=unchecked])'
  )
  /** Add the variant to the html state indeterminate */
  overideVariant(
    addVariant,
    'indeterminate',
    ':is(:indeterminate,[data-indeterminate],[aria-checked=mixed],[data-state=indeterminate])'
  )
  /** Add the variant to the html state placeholder-shown */
  overideVariant(
    addVariant,
    'placeholder-shown',
    ':is(:placeholder-shown,[data-placeholder-shown])'
  )
  /** Add the variant to the html state focus */
  overideVariant(addVariant, 'focus', ':is(:focus,[data-focus])')
  /** Add the variant to the html state focus-visible */
  overideVariant(addVariant, 'focus-visible', ':is(:focus-visible,[data-focus-visible])')
  /** Add the variant to the html state active */
  overideVariant(addVariant, 'active', ':is(:active,[data-active])')

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
