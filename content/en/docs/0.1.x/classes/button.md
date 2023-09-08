---
title : "Ardillo\\Button"
description: "Ardillo base Button class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Button class.

### Properties

#### `Button::$app`

Associated App instance

 * type: `App`



### Methods

#### `Button::__construct(string $text)`

Creates a new Button instance

 * `string $text`: The button text


#### `Button::isValid()`

Returns whether the button is valid or not


Returns `bool`



#### `Button::getText()`

Returns the current button text


Returns `string`



#### `Button::setText(string $text)`

Sets the button text

 * `string $text`: The button text


#### `Button::onClicked()`

Callback to be executed when the button is clicked



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



