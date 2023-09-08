---
title : "Ardillo\\Checkbox"
description: "Ardillo base Checkbox class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Checkbox class.

### Properties

#### `Checkbox::$app`

Associated App instance

 * type: `App`



### Methods

#### `Checkbox::__construct(string $text)`

Creates a new Checkbox instance

 * `string $text`: The checkbox text


#### `Checkbox::isValid()`

Returns whether the checkbox is valid or not


Returns `bool`



#### `Checkbox::getChecked()`

Returns whether the checkbox is checked or not


Returns `bool`



#### `Checkbox::setChecked(bool $checked)`

Sets whether the checkbox is checked or not

 * `bool $checked`: 


#### `Checkbox::getText()`

Returns the current checkbox text


Returns `string`



#### `Checkbox::setText(string $text)`

Sets the checkbox text

 * `string $text`: The checkbox text


#### `Checkbox::onToggled()`

Callback to be executed when the checkbox is toggled



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



