import { configure } from '@ayato-san/tooling-configs/eslint'

export default configure(undefined, {
  name: 'Overides',
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
})
