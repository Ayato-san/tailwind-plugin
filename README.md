<p align="center">
  <img src="https://github.com/Ayato-san/tailwind-plugin/assets/71392060/676a589a-94b7-4d19-bcd2-83f67423858f">
</p>

## Features

- Designed to work with Tailwind
- Super easy to use (one line of code)
- 5 integrated plugins:
  - **Default Utilities**: Provides utility classes for animation delays, durations, text shadows, and user interactions.
  - **Gradient Mask**: Adds gradient mask utilities for various directions.
  - **Responsive Grid**: Enables a responsive grid system with customizable padding and widths.
  - **Pattern Background**: Allows for background patterns with customizable sizes and colors.
  - **Ark UI Variants**: Adds custom variants for various data states and attributes.
- Customizable themes and variants
- Supports complex and responsive design needs
- Extends Tailwind's default configuration with additional utilities and variants
- Compatible with modern web development practices
- Comprehensive documentation and easy integration

### Install

- with NPM

  ```bash
  npm install -D tailwindcss @ayato-san/tailwind-plugin
  ```

- with pnpm

  ```bash
  pnpm add -D tailwindcss @ayato-san/tailwind-plugin
  ```

- with yarn
  ```bash
  yarn add -D tailwindcss @ayato-san/tailwind-plugin
  ```

### Default Utilities

To enable the plugin, add the following line to your Tailwind CSS configuration:

```js
{
  plugins: [require('@ayato-san/tailwind-plugin')],
}
```

#### Available Classes

- `animation-delay-<delay>`: Sets the animation delay.
- `animation-duration-<duration>`: Sets the animation duration.
- `text-shadow-<size>`: Applies a text shadow. Use `shadow-<color>` to change the text shadow color.
- `interact-<state>`: Controls user interaction for an element.
- `bg-image-<image>`: Sets a background image from the theme's `images`.

#### Custom Variants

- `child:`: Targets direct child elements.
- `sibling:`: Targets sibling elements.
- `not-data:`: Applies styles when a specified data attribute is not present.
- `group-not-data:`: Applies styles when a specified data attribute is not present on a group element.
- `peer-not-data:`: Applies styles when a specified data attribute is not present on a peer element.

#### Theme Customization

- `animationDelay`: Uses the same default values as `transitionDelay`.
- `animationDuration`: Uses the same default values as `transitionDuration`.
- `textShadow`: Uses the same default values as `boxShadow`.
- `interact`: Default values are `none` and `initial`.

### Gradient Mask

Enable the gradient mask plugin by adding the following line to your Tailwind CSS configuration:

```js
{
  plugins: [require('@ayato-san/tailwind-plugin/gradient_mask')],
}
```

#### Available classes:

- `gradient-mask-t-<percentage>`: Applies a gradient mask from the top.
- `gradient-mask-r-<percentage>`: Applies a gradient mask from the right.
- `gradient-mask-b-<percentage>`: Applies a gradient mask from the bottom.
- `gradient-mask-l-<percentage>`: Applies a gradient mask from the left.

> [!TIP]
> Gradient masks can be stacked for complex effects.

#### Theme customization options:

- `gradientSteps`: Defines the gradient steps, with default values of `[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`.

### Responsive Grid

Enable the responsive grid plugin by adding the following line to your Tailwind CSS configuration:

```js
{
  plugins: [require('@ayato-san/tailwind-plugin/grid')],
}
```

#### Available classes:

- `grid-container`: Defines the grid container.
- `col-full`: Makes the element span the full width.
- `col-breakout`: Makes the element span the breakout width.
- `col-content`: Makes the element span the content width.

#### Theme customization options:

- `paddingInline`: Default is `2rem`.
- `contentMaxWidth`: Default is `90ch`.
- `breakoutMaxWidth`: Default is `110ch`.

### Pattern Background

Enable the pattern background plugin by adding the following line to your Tailwind CSS configuration:

```js
{
  plugins: [require('@ayato-san/tailwind-plugin/pattern_bg')],
}
```

#### Available classes:

- `bg-pattern`: Defines the background pattern.
- `pattern`: Defines the pattern size or color.
- `bg`: Modifies the default background definition.
- `pattern-fade`: Creates a fading effect for the background pattern.

### Ark UI Variants

Enable the Ark UI variants plugin by adding the following line to your Tailwind CSS configuration:

```js
{
  plugins: [require('@ayato-san/tailwind-plugin/arkui_variants')],
}
```

#### Custom Variants for Data States

- `data-state-open`: Applied when an element is in an "open" state.
- `data-state-closed`: Applied when an element is in a "closed" state.
- `data-state-on`: Applied when an element is turned "on".
- `data-state-off`: Applied when an element is turned "off".
- `data-state-under`: Applied when an element is in an "under-value" state.
- `data-expanded`: Applied when an element is "expanded".

#### Custom Variants for Data Element Presence

- `data-current`: Applied when an element is the "current" item.
- `data-copied`: Applied when an element has been "copied".
- `data-inview`: Applied when an element is "in view".
- `data-today`: Applied when an element represents "today".
- `data-highlighted`: Applied when an element is "highlighted".
- `data-dragging`: Applied when an element is being "dragged".
- `data-complete`: Applied when an element is "complete".
- `data-incomplete`: Applied when an element is "incomplete".
- `data-empty`: Applied when an element is "empty".
- `data-mounted`: Applied when an element is "mounted".
- `data-paused`: Applied when an element is "paused".
- `data-overlap`: Applied when an element is "overlapping" another element.

#### Override Tailwind Variants

- `selected`: Applied when an element is "selected".
- `pressed`: Applied when an element is "pressed".
- `invalid`: Applied when an element is "invalid".
- `hidden`: Applied when an element is "hidden".
- `hover`: Applied when an element is being "hovered" over.
- `disabled`: Applied when an element is "disabled".
- `read-only`: Applied when an element is "read-only".
- `checked`: Applied when an element is "checked".
- `unchecked`: Applied when an element is "unchecked".
- `indeterminate`: Applied when an element is in an "indeterminate" state.
- `placeholder-shown`: Applied when a placeholder is shown in an input.
- `focus`: Applied when an element is "focused".
- `focus-visible`: Applied when an element is "focus-visible".
- `active`: Applied when an element is "active".

#### Matching Variants for Data Attributes

- `data-scope`: Applied based on the "scope" attribute.
- `data-part`: Applied based on the "part" attribute.
- `data-orientation`: Applied based on the "orientation" attribute.
- `data-index`: Applied based on the "index" attribute.
- `data-channel`: Applied based on the "channel" attribute.
- `data-placement`: Applied based on the "placement" attribute.
- `data-value`: Applied based on the "value" attribute.
- `data-valuetext`: Applied based on the "valuetext" attribute.
- `data-focusable`: Applied based on the "focusable" attribute.
- `data-view`: Applied based on the "view" attribute.
- `data-columns`: Applied based on the "columns" attribute.
- `data-max`: Applied based on the "max" attribute.
- `data-state`: Applied based on the "state" attribute.
- `data-type`: Applied based on the "type" attribute.
- `data-align`: Applied based on the "align" attribute.
- `data-side`: Applied based on the "side" attribute.
- `data-first`: Applied based on the "first" attribute.
- `data-stack`: Applied based on the "stack" attribute.
- `data-sibling`: Applied based on the "sibling" attribute.
- `data-depth`: Applied based on the "depth" attribute.
- `data-branch`: Applied based on the "branch" attribute.
- `data-item`: Applied based on the "item" attribute.
