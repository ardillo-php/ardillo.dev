---
title : "Ardillo\\TimePicker"
description: "Ardillo base TimePicker class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base TimePicker class.

### Properties

#### `TimePicker::$app`

Associated App instance

 * type: `App`



### Methods

#### `TimePicker::__construct()`

Creates a new TimePicker instance



#### `TimePicker::isValid()`

Returns whether the time picker is valid or not


Returns `bool`



#### `DateTimePicker::getTime()`

Returns the current date time selection


Returns `\DateTimeImmutable`



#### `DateTimePicker::setTime(\DateTimeInterface $time)`

Sets the date time selection

 * `\DateTimeInterface $time`: The date time to be set


#### `DateTimePicker::onChanged()`

Callback to be executed when the date time selection is changed



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



