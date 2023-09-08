---
title : "Ardillo\\Slider"
description: "Ardillo base Slider class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Slider class.

### Properties

#### `Slider::$app`

Associated App instance

 * type: `App`



### Methods

#### `Slider::__construct(int $min, int $max)`

Creates a new Slider instance

 * `int $min`: The minimum value
 * `int $max`: The maximum value


#### `Slider::isValid()`

Returns whether the slider is valid or not


Returns `bool`



#### `Slider::getHasToolTip()`

Returns whether the slider has tooltips enabled or not


Returns `bool`



#### `Slider::setHasToolTip(bool $hasToolTip)`

Sets whether the slider has tooltips enabled or not

 * `bool $hasToolTip`: 


#### `Slider::getValue()`

Returns the current value


Returns `int`



#### `Slider::setValue(int $value)`

Sets the value

 * `int $value`: The value to be set


#### `Slider::onChanged()`

Callback to be executed when the value is changed



#### `Slider::onReleased()`

Callback to be executed when the slider button is being released



#### `Slider::setRange(int $min, int $max)`

Updates the slider range

 * `int $min`: The minimum value
 * `int $max`: The maximum value


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



