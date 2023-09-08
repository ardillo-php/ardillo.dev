---
title : "Ardillo\\Tab"
description: "Ardillo base Tab class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Tab class.

### Properties

#### `Tab::$app`

Associated App instance

 * type: `App`



### Methods

#### `Tab::__construct()`

Creates a new Tab instance



#### `Tab::isValid()`

Returns whether the tab is valid or not


Returns `bool`



#### `Tab::getMargined()`

Returns whether a tab at a given index is margined or not


Returns `bool`



#### `Tab::setMargined(bool $margined)`

Sets whether a tab at a given index is margined or not

 * `bool $margined`: 


#### `Tab::append(string $label, Control $child)`

Appends a control in form of a page/tab with label

 * `string $label`: The label to be used
 * `Control $child`: The child control to be appended


#### `Tab::delete(int $index)`

Deletes a child at a given index

 * `int $index`: The index of the child to be deleted


#### `Tab::insertAt(string $label, int $index, Control $child)`

Inserts a control in form of a page/tab with label at a given index

 * `string $label`: The label to be used
 * `int $index`: The index where the child should be inserted
 * `Control $child`: The child control to be appended


#### `Tab::pageCount()`

Returns the current tab/page count


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



