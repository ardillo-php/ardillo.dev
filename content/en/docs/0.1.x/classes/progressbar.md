---
title : "Ardillo\\ProgressBar"
description: "Ardillo base ProgressBar class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base ProgressBar class.

### Properties

#### `ProgressBar::$app`

Associated App instance

 * type: `App`



### Methods

#### `ProgressBar::__construct()`

Creates a new ProgressBar instance



#### `ProgressBar::isValid()`

Returns whether the progress bar is valid or not


Returns `bool`



#### `ProgressBar::getValue()`

Returns the current progress value


Returns `int`



#### `ProgressBar::setValue(int $value)`

Sets the progress value

 * `int $value`: The progress value


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



