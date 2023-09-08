---
title : "Ardillo\\Color"
description: "Ardillo base Color class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Color class.

### Properties

#### `Color::$red`

Red channel intensity, 0 through 1

 * type: `float`
 * default: `0`

#### `Color::$green`

Green channel intensity, 0 through 1

 * type: `float`
 * default: `0`

#### `Color::$blue`

Blue channel intensity, 0 through 1

 * type: `float`
 * default: `0`

#### `Color::$alpha`

Alpha channel intensity, 0 through 1

 * type: `float`
 * default: `1`



### Methods

#### `Color::fromRGBA(int $hex)`

Creates a new Color instance from a hexadecimal RGBA value (static method)

 * `int $hex`: The hexadecimal RGBA value


#### `Color::fromRGB(int $hex)`

Creates a new Color instance from a hexadecimal RGB value (static method)

 * `int $hex`: The hexadecimal RGB value


#### `Color::__construct(float $red, float $green, float $blue, float $alpha)`

Creates a new Color instance

 * `float $red`: Red channel intensity, 0 through 1
 * `float $green`: Green channel intensity, 0 through 1
 * `float $blue`: Blue channel intensity, 0 through 1
 * `float $alpha`: Alpha channel intensity, 0 through 1


