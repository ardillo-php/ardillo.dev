---
title : "Ardillo\\DrawPath"
description: "Ardillo base DrawPath class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base DrawPath class.

### Properties

#### `DrawPath::$app`

Associated App instance

 * type: `App`



### Methods

#### `DrawPath::__construct(int $fillMode)`

Creates a new DrawPath instance

 * `int $fillMode`: The fill mode (use the FillMode class integer constants)


#### `DrawPath::isValid()`

Returns whether the draw path is valid or not


Returns `bool`



#### `DrawPath::addRectangle(Point $pt, Size $size)`

Adds a rectangle to the draw path

 * `Point $pt`: The rectangle's top-left point
 * `Size $size`: The rectangle's size


#### `DrawPath::newFigure(float $x, float $y)`

Adds a figure to the draw path

 * `float $x`: The figure's X coordinate
 * `float $y`: The figure's Y coordinate


#### `DrawPath::closeFigure()`

Closes the current figure



#### `DrawPath::lineTo(float $x, float $y)`

Adds a line to the draw path

 * `float $x`: The line's ending X coordinate
 * `float $y`: The line's ending Y coordinate


#### `DrawPath::end()`

Ends the draw path



