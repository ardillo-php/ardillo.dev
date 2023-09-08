---
title : "Ardillo\\Combobox"
description: "Ardillo base Combobox class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Combobox class.

### Properties

#### `Combobox::$app`

Associated App instance

 * type: `App`



### Methods

#### `Combobox::__construct()`

Creates a new Combobox instance



#### `Combobox::isValid()`

Returns whether the combobox is valid or not


Returns `bool`



#### `Combobox::getSelected()`

Returns the current selection index


Returns `int`



#### `Combobox::setSelected(int $index)`

Sets the selection index

 * `int $index`: The index of the item to be set


#### `Combobox::onSelected()`

Callback to be executed when the selection is changed



#### `Combobox::append(string $text)`

Appends a new item to the combobox

 * `string $text`: Item's text


#### `Combobox::clear()`

Clears all items from the combobox



#### `Combobox::delete()`

Deletes an item at a given index



#### `Combobox::insertAt(int $index, string $text)`

Inserts a new item at a given index

 * `int $index`: The index where the item is to be inserted
 * `string $text`: Item's text


#### `Combobox::numItems()`

Returns the number of items in the combobox


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



