---
title : "Ardillo\\AreaDrawParams"
description: "Ardillo base AreaDrawParams class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base AreaDrawParams class.

### Properties

#### `AreaDrawParams::$app`

Associated App instance

 * type: `App`



### Methods

#### `AreaDrawParams::getAreaSize()`

Returns the area size


Returns `Size`



#### `AreaDrawParams::getClipPoint()`

Returns the clip point


Returns `Point`



#### `AreaDrawParams::getClipSize()`

Returns the clip size


Returns `Size`



#### `AreaDrawParams::fill(DrawPath $path, DrawBrush $brush)`

Fills the area using the specified brush

 * `DrawPath $path`: The path to be followed
 * `DrawBrush $brush`: The brush to be used


#### `AreaDrawParams::stroke(DrawPath $path, DrawBrush $brush, DrawStrokeParams $sp)`

Apllies a stroke the area (its outline) using the specified brush

 * `DrawPath $path`: The path to be followed
 * `DrawBrush $brush`: The brush to be used
 * `DrawStrokeParams $sp`: The stroke parameters


#### `AreaDrawParams::transform(DrawMatrix $matrix)`

Applies a transformation matrix to the area

 * `DrawMatrix $matrix`: The transformation matrix


