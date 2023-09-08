---
title : "Ardillo\\TableValueString"
description: "Ardillo base TableValueString class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base TableValueString class.

### Properties

#### `TableValueString::$app`

Associated App instance

 * type: `App`



### Methods

#### `TableValueString::__construct(string $str)`

Creates a new TableValueString instance

 * `string $str`: The string value


#### `TableValueString::isValid()`

Returns whether the table value is valid or not


Returns `bool`



#### `TableValueString::get()`

Returns the table cell value


Returns `string`



#### `TableValue::getType()`

Returns the table value type (as a TableValueType class integer constant)


Returns `int`



