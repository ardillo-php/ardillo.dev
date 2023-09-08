---
title : "Ardillo\\Image"
description: "Ardillo base Image class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Image class.

### Properties

#### `Image::$app`

Associated App instance

 * type: `App`



### Methods

#### `Image::__construct(float $width, float $height)`

Creates a new Image instance

 * `float $width`: The image width
 * `float $height`: The image height


#### `Image::isValid()`

Returns whether the image is valid or not


Returns `bool`



#### `Image::append(list<Color> $pixels, Size $size)`

Appends a binary representation of the image

 * `list<Color> $pixels`: Array of image representation pixels (as Color objects)
 * `Size $size`: Size of the image representation


