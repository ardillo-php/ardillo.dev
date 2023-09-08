---
title : "Ardillo\\Label"
description: "Ardillo base Label class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Label class.

### Properties

#### `Label::$app`

Associated App instance

 * type: `App`



### Methods

#### `Label::__construct(string $text)`

Creates a new Label instance

 * `string $text`: The label text


#### `Label::isValid()`

Returns whether the label is valid or not


Returns `bool`



#### `Label::getText()`

Returns the current label text


Returns `string`



#### `Label::setText(string $text)`

Sets the label text

 * `string $text`: The label text


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



