---
title : "Ardillo\\Box"
description: "Ardillo base Box class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Box class.

### Properties

#### `Box::$app`

Associated App instance

 * type: `App`



### Methods

#### `Box::getPadded()`

Returns the whether the box is padded or not


Returns `bool`



#### `Box::setPadded(bool $padded)`

Sets whether the box is padded or not

 * `bool $padded`: 


#### `Box::append(Control $child, bool $stretchy)`

Appends a child control to the box

 * `Control $child`: The child control to be appended
 * `bool $stretchy`: Whether the child should be stretched or not


#### `Box::delete(int $index)`

Deletes a child at a given index

 * `int $index`: The index of the child to be deleted


#### `Box::childrenCount()`

Returns the current children count


Returns `int`



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



