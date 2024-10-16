import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: [
    'src/default_utilities/index.ts',
    'src/gradient_mask/index.ts',
    'src/grid/index.ts',
    'src/trendy_background/index.ts',
    'src/pattern_background/index.ts',
    'src/arkui_variants/index.ts',
    'src/lib/',
  ],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: 'build',
  publicDir: true,
  format: ['esm', 'cjs'],
  dts: true,
  minify: !options.watch,
}))
