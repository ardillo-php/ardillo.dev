---
title : "Ardillo\\TableModel"
description: "Ardillo base TableModel class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base TableModel class.

### Properties

#### `TableModel::$app`

Associated App instance

 * type: `App`



### Methods

#### `TableModel::__construct(TableModelHandler $mh)`

Creates a new TableModel instance

 * `TableModelHandler $mh`: The table model handler


#### `TableModel::isValid()`

Returns whether the table model is valid or not


Returns `bool`



#### `TableModel::rowChanged(int $index)`

Informs the table model a row has changed

 * `int $index`: Index of the affected row


#### `TableModel::rowDeleted(int $oldIndex)`

Informs the table model a row has been deleted

 * `int $oldIndex`: Index of the deleted row


#### `TableModel::rowInserted(int $newIndex)`

Informs the table model a row has been inserted

 * `int $newIndex`: Index of the inserted row


