---
title : "Ardillo\\EditableCombobox"
description: "Ardillo base EditableCombobox class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base EditableCombobox class.

### Properties

#### `EditableCombobox::$app`

Associated App instance

 * type: `App`



### Methods

#### `EditableCombobox::__construct()`

Creates a new EditableCombobox instance



#### `EditableCombobox::isValid()`

Returns whether the editable combobox is valid or not


Returns `bool`



#### `EditableCombobox::getText()`

Returns the current text


Returns `string`



#### `EditableCombobox::setText(string $text)`

Sets the text

 * `string $text`: The text to be set


#### `EditableCombobox::onChanged()`

Callback to be executed when the text is changed



#### `EditableCombobox::append(string $text)`

Appends a new item to the editable combobox

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



