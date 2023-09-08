---
title : "Ardillo\\TableValueColor"
description: "Ardillo base TableValueColor class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base TableValueColor class.

### Properties

#### `TableValueColor::$app`

Associated App instance

 * type: `App`



### Methods

#### `TableValueColor::__construct(Color $color)`

Creates a new TableValueColor instance

 * `Color $color`: The color value


#### `TableValueColor::isValid()`

Returns whether the table value is valid or not


Returns `bool`



#### `TableValueColor::get()`

Returns the table cell value


Returns `Color`



#### `TableValue::getType()`

Returns the table value type (as a TableValueType class integer constant)


Returns `int`



