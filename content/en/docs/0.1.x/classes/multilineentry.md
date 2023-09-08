---
title : "Ardillo\\MultilineEntry"
description: "Ardillo base MultilineEntry class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base MultilineEntry class.

### Properties

#### `MultilineEntry::$app`

Associated App instance

 * type: `App`



### Methods

#### `MultilineEntry::__construct()`

Creates a new MultilineEntry instance



#### `MultilineEntry::isValid()`

Returns whether the multiline entry is valid or not


Returns `bool`



#### `MultilineEntry::getReadOnly()`

Returns whether the multiline entry is read-only or not


Returns `bool`



#### `MultilineEntry::setReadOnly(bool $readonly)`

Sets whether the multiline entry is read-only or not

 * `bool $readonly`: 


#### `MultilineEntry::getText()`

Returns the current text


Returns `string`



#### `MultilineEntry::setText(string $text)`

Sets the text

 * `string $text`: The text to be set


#### `MultilineEntry::onChanged()`

Callback to be executed when the text is changed



#### `MultilineEntry::append(string $text)`

Appends a string to the multiline entry

 * `string $text`: The text to be appended


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



