---
title : "Ardillo\\AreaMouseEvent"
description: "Ardillo base AreaMouseEvent class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base AreaMouseEvent class.

### Properties

#### `AreaMouseEvent::$app`

Associated App instance

 * type: `App`



### Methods

#### `AreaMouseEvent::getPoint()`

Returns the coordinates of the mouse pointer


Returns `Point`



#### `AreaMouseEvent::getAreaSize()`

Returns the selection area


Returns `Size`



#### `AreaMouseEvent::getDown()`

Returns the down mouse button state


Returns `int`



#### `AreaMouseEvent::getUp()`

Returns the up mouse button state


Returns `int`



#### `AreaMouseEvent::getCount()`

Returns the count (needs to be better documented in the upstream)


Returns `int`



#### `AreaMouseEvent::getModifiers()`

Returns the event modifier flags


Returns `Modifiers`



#### `AreaMouseEvent::getHeld1To64()`

Returns the event held1To64 flag (needs to be better documented in the upstream)


Returns `int`



