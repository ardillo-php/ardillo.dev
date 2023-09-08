---
title : "Ardillo\\DrawBrush"
description: "Ardillo base DrawBrush class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base DrawBrush class.

### Properties

#### `DrawBrush::$app`

Associated App instance

 * type: `App`



### Methods

#### `DrawBrush::isValid()`

Returns whether the brush is valid or not


Returns `bool`



#### `DrawBrush::getType()`

Returns the brush type


Returns `int`



#### `DrawBrush::setType(int $type)`

Sets the brush type

 * `int $type`: The brush type (use the DrawBrushType class integer constants)


#### `DrawBrush::getColor()`

Returns the brush color


Returns `Color`



#### `DrawBrush::setColor(Color $color)`

Sets the brush color

 * `Color $color`: The brush color


#### `DrawBrush::getPoint0()`

Return the brush's point0 (needs to be better documented in the upstream)


Returns `Point`



#### `DrawBrush::setPoint0(Point $point)`

Sets the brush's point0

 * `Point $point`: The brush's point0 (needs to be better documented in the upstream)


#### `DrawBrush::getPoint1()`

Return the brush's point1 (needs to be better documented in the upstream)


Returns `Point`



#### `DrawBrush::setPoint1(Point $point)`

Sets the brush's point1

 * `Point $point`: The brush's point1 (needs to be better documented in the upstream)


#### `DrawBrush::getOuterRadius()`

Returns brush's outer radius


Returns `float`



#### `DrawBrush::setOuterRadius(float $outerRadius)`

Sets the brush's outer radius

 * `float $outerRadius`: The brush's outer radius


#### `DrawBrush::getStops()`

Returns brush's grandient stops


Returns `DrawBrushGradientStop`



#### `DrawBrush::setStops(DrawBrushGradientStop $stops)`

Sets the brush's gradient stops

 * `DrawBrushGradientStop $stops`: The brush's gradient stops


#### `DrawBrush::getNumStops()`

Returns brush's grandient stop count


Returns `int`



#### `DrawBrush::setNumStops(int $numStops)`

Sets the brush's gradient stop count

 * `int $numStops`: The brush's gradient stop count


