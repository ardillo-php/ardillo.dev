---
title : "Ardillo\\Spinbox"
description: "Ardillo base Spinbox class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Spinbox class.

### Properties

#### `Spinbox::$app`

Associated App instance

 * type: `App`



### Methods

#### `Spinbox::__construct(int $min, int $max)`

Creates a new Spinbox instance

 * `int $min`: The minimum value
 * `int $max`: The maximum value


#### `Spinbox::isValid()`

Returns whether the spinbox is valid or not


Returns `bool`



#### `Spinbox::getValue()`

Returns the current value


Returns `int`



#### `Spinbox::setValue(int $value)`

Sets the value

 * `int $value`: The value to be set


#### `Spinbox::onChanged()`

Callback to be executed when the value is changed



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



