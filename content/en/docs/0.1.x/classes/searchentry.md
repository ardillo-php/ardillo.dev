---
title : "Ardillo\\SearchEntry"
description: "Ardillo base SearchEntry class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base SearchEntry class.

### Properties

#### `SearchEntry::$app`

Associated App instance

 * type: `App`



### Methods

#### `SearchEntry::__construct()`

Creates a new SearchEntry instance



#### `SearchEntry::isValid()`

Returns whether the search entry is valid or not


Returns `bool`



#### `Entry::getReadOnly()`

Returns whether the text entry is read-only or not


Returns `bool`



#### `Entry::setReadOnly(bool $readonly)`

Sets whether the text entry is read-only or not

 * `bool $readonly`: 


#### `Entry::getText()`

Returns the current text


Returns `string`



#### `Entry::setText(string $text)`

Sets the text

 * `string $text`: The text to be set


#### `Entry::onChanged()`

Callback to be executed when the text is changed



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



