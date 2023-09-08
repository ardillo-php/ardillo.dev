---
title : "Ardillo\\Grid"
description: "Ardillo base Grid class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Grid class.

### Properties

#### `Grid::$app`

Associated App instance

 * type: `App`



### Methods

#### `Grid::__construct()`

Creates a new Grid instance



#### `Grid::isValid()`

Returns whether the grid is valid or not


Returns `bool`



#### `Grid::getPadded()`

Returns whether the grid is padded or not


Returns `bool`



#### `Grid::setPadded(bool $padded)`

Sets whether the grid is padded or not

 * `bool $padded`: 


#### `Grid::append(Control $child, int $left, int $top, int $xspan, int $yspan, bool $hexpand, int $halign, bool $vexpand, int $valign)`

Appends a child control to the grid

 * `Control $child`: The child control to be appended
 * `int $left`: The left position
 * `int $top`: The top position
 * `int $xspan`: The horizontal span
 * `int $yspan`: The vertical span
 * `bool $hexpand`: Whether the child should be horizontally expanded or not
 * `int $halign`: The horizontal alignment (use the Align class integer constants)
 * `bool $vexpand`: Whether the child should be vertically expanded or not
 * `int $valign`: The vertical alignment (use the Align class integer constants)


#### `Grid::insertAt()`





#### `Control::disable()`

Disables the control



#### `Control::enable()`

Enables the control



#### `Control::isEnabled()`

Returns whether the control is enabled or not


Returns `bool`



#### `Control::isEnabledToUser()`

Returns whether the control is enabled to the user or not


Returns `bool`



#### `Control::hide()`

Hides the control



#### `Control::show()`

Shows the control



#### `Control::isTopLevel()`

Returns whether the control is a top-level control or not


Returns `bool`



#### `Control::isVisible()`

Returns whether the control is visible or not


Returns `bool`



