---
title : "Ardillo\\TableValueImage"
description: "Ardillo base TableValueImage class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base TableValueImage class.

### Properties

#### `TableValueImage::$app`

Associated App instance

 * type: `App`



### Methods

#### `TableValueImage::__construct(Image $img)`

Creates a new TableValueImage instance

 * `Image $img`: The image value


#### `TableValueImage::isValid()`

Returns whether the table value is valid or not


Returns `bool`



#### `TableValueImage::get()`

Returns the table cell value


Returns `Image`



#### `TableValue::getType()`

Returns the table value type (as a TableValueType class integer constant)


Returns `int`



