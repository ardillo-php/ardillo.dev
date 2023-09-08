---
title : "Ardillo\\Area"
description: "Ardillo base Area class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Area class.

### Properties

#### `Area::$app`

Associated App instance

 * type: `App`



### Methods

#### `Area::__construct(AreaHandler $ah)`

Creates a new Area instance

 * `AreaHandler $ah`: The area handler


#### `Area::isValid()`

Returns whether the area is valid or not


Returns `bool`



#### `Area::queueRedrawAll()`

Schedules a redraw of the area



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



