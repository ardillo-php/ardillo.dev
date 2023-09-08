---
title : "Ardillo\\Group"
description: "Ardillo base Group class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Group class.

### Properties

#### `Group::$app`

Associated App instance

 * type: `App`



### Methods

#### `Group::__construct(string $title)`

Creates a new Group instance

 * `string $title`: The group title


#### `Group::isValid()`

Returns whether the group is valid or not


Returns `bool`



#### `Group::getMargined()`

Returns whether the group is margined or not


Returns `bool`



#### `Group::setMargined(bool $margined)`

Sets whether the group is margined or not

 * `bool $margined`: 


#### `Group::getTitle()`

Returns the group title


Returns `string`



#### `Group::setTitle(string $title)`

Sets the group title

 * `string $title`: The group title


#### `Group::setChild(Control $child)`

Appends a child control to the group

 * `Control $child`: The child control to be appended


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



