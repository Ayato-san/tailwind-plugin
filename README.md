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

list of differents theme customization

- `animationDelay` (same default values as transitionDelay)
- `animationDuration` (same default values as transitionDuration)
- `textShadow` (same default values as boxShadow)
- `interact` ([none, initial] by default)

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

list of differents theme customization

- `gradientSteps` ([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] by default)

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

list of differents theme customization

- `paddingInline` (2rem by default)
- `contentMaxWidth` (90ch by default)
- `breakoutMaxWidth` (110ch by default)

### Trendy background

enabling by adding this line in

```js
{
  plugins: [ require('@ayato-san/tailwind-plugin/trendy_bg') ],
}
```

list of different classes

- `bg-dots` define the background by grid of dots
- `bg-squares` define the background by grid of squares
- `bg-trendy` change the dots/squares colors
- `trendy-thickness` define the thickness of dots/squares
- `trendy-size` define the size of dots/squares

list of differents theme customization

- `bgTrendyThickness` ([0, 1, 2, 4, 8, 10] by default)
- `bgTrendySize` ([0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100] by default)
