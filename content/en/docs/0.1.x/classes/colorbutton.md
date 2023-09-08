---
title : "Ardillo\\ColorButton"
description: "Ardillo base ColorButton class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base ColorButton class.

### Properties

#### `ColorButton::$app`

Associated App instance

 * type: `App`



### Methods

#### `ColorButton::__construct()`

Creates a new ColorButton instance



#### `ColorButton::isValid()`

Returns whether the color button is valid or not


Returns `bool`



#### `ColorButton::getColor()`

Returns the current selected color


Returns `Color`



#### `ColorButton::setColor(Color $color)`

Sets the color

 * `Color $color`: The color to be set


#### `ColorButton::onChanged()`

Callback to be executed when the color selection is changed



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



