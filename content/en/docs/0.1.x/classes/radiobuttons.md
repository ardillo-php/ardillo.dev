---
title : "Ardillo\\RadioButtons"
description: "Ardillo base RadioButtons class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base RadioButtons class.

### Properties

#### `RadioButtons::$app`

Associated App instance

 * type: `App`



### Methods

#### `RadioButtons::__construct()`

Creates a new RadioButtons instance



#### `RadioButtons::isValid()`

Returns whether the radio buttons are valid or not


Returns `bool`



#### `RadioButtons::getSelected()`

Returns the current selection index


Returns `int`



#### `RadioButtons::setSelected(int $index)`

Sets the selection index

 * `int $index`: The index of the radio button to be set


#### `RadioButtons::onSelected()`

Callback to be executed when the selection is changed



#### `RadioButtons::append(string $text)`

Appends a new radio button item

 * `string $text`: Item's text


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



