<p align="center">
  <img src="https://github.com/Ayato-san/tailwind-plugin/assets/71392060/676a589a-94b7-4d19-bcd2-83f67423858f">
</p>

## Features

- Designed to work with Tailwind
- Super easy to use ( one line of code )
- 3 integrated plugin

### Install

```bash
npm install -D tailwindcss @ayato-san/tailwind-plugin
```

### Utilities

enabling by adding this line in

```js
{
  plugins: [ require('@ayato-san/tailwind-plugin') ],
}
```

list of different classes

- `animation-delay-<delay>`
- `animation-duration-<duration>`
- `text-shadow-<size>` using `shadow-<color>` to change the text shadow color
- `interact-<state>` disable all the interaction for an element
- `bg-image-<image>` add images in theme `images`

list of different variant

- `child:` select childs
- `sibling:` select sibling
- `not-data:` when not have specified data tag
- `group-not-data:` when not have specified data tag on group

### Gradient Mask

enabling by adding this line in

```js
{
  plugins: [ require('@ayato-san/tailwind-plugin/gradient_mask') ],
}
```

list of different classes

- `gradient-mask-t-<percentage>`
- `gradient-mask-r-<percentage>`
- `gradient-mask-b-<percentage>`
- `gradient-mask-l-<percentage>`

> [!TIP]
> Mask can be stacked

### Responsive Grid

enabling by adding this line in

```js
{
  plugins: [ require('@ayato-san/tailwind-plugin/grid') ],
}
```

list of different classes

- `grid-container` define the grid
- `col-full` make the data take full size
- `col-breakout` make the data take breakout size
- `col-content` make the data take default size
