import type { CSSRuleObject, KeyValuePair } from 'tailwindcss/types/config.js'

import type { Steps } from '../enums/steps.js'

export type GradientValues = string | keyof typeof Steps

export type GradientUtilities = KeyValuePair<
  string,
  (value: GradientValues, extra: { modifier: string | null }) => CSSRuleObject | null
>
