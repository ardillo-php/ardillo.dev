---
title : "Ardillo\\DrawStrokeParams"
description: "Ardillo base DrawStrokeParams class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base DrawStrokeParams class.

### Constants

 * `DrawStrokeParams::DEFAULT_MITER_LIMIT` = `10`


### Properties

#### `DrawStrokeParams::$app`

Associated App instance

 * type: `App`



### Methods

#### `DrawStrokeParams::isValid()`

Returns whether the stroke parameters are valid or not


Returns `bool`



#### `DrawStrokeParams::getCap()`

Returns the stroke cap


Returns `int`



#### `DrawStrokeParams::setCap(int $cap)`

Sets the stroke cap

 * `int $cap`: The stroke cap (use the DrawLineCap class integer constants)


#### `DrawStrokeParams::getJoin()`

Returns the stroke join


Returns `int`



#### `DrawStrokeParams::setJoin(int $join)`

Sets the stroke join

 * `int $join`: The stroke join (use the DrawLineJoin class integer constants)


#### `DrawStrokeParams::getThickness()`

Returns the stroke thickness


Returns `float`



#### `DrawStrokeParams::setThickness(float $thickness)`

Sets the stroke thickness

 * `float $thickness`: The stroke thickness


#### `DrawStrokeParams::getMiterLimit()`

Returns the stroke miter limit


Returns `float`



#### `DrawStrokeParams::setMiterLimit(float $miterLimit)`

Sets the stroke miter limit

 * `float $miterLimit`: The stroke miter limit


#### `DrawStrokeParams::getDashes()`

Returns the stroke dash


Returns `float`



#### `DrawStrokeParams::setDashes(float $dashes)`

Sets the stroke dash

 * `float $dashes`: The stroke dash phase


#### `DrawStrokeParams::getNumDashes()`

Returns the stroke dash count


Returns `int`



#### `DrawStrokeParams::setNumDashes(int $numDashes)`

Sets the stroke dash count

 * `int $numDashes`: The stroke dash count


#### `DrawStrokeParams::getDashPhase()`

Returns the stroke dash phase


Returns `float`



#### `DrawStrokeParams::setDashPhase(float $dashPhase)`

Sets the stroke dash phase

 * `float $dashPhase`: The stroke dash phase


