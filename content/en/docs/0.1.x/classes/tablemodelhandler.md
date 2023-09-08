---
title : "Ardillo\\TableModelHandler"
description: "Ardillo base TableModelHandler class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base TableModelHandler class.

### Properties

#### `TableModelHandler::$app`

Associated App instance

 * type: `App`



### Methods

#### `TableModelHandler::isValid()`

Returns whether the table model handler is valid or not


Returns `bool`



#### `TableModelHandler::cellValueHandler(TableModel $m, int $row, int $column)`

Method invoked to get the value of a cell

 * `TableModel $m`: The table model
 * `int $row`: The row index
 * `int $column`: The column index

Returns `TableValue`



#### `TableModelHandler::columnTypeHandler(TableModel $m, int $column)`

Method invoked to get the type of a column

 * `TableModel $m`: The table model
 * `int $column`: The column index

Returns `int`



#### `TableModelHandler::numColumnsHandler(TableModel $m)`

Method invoked to get the number of columns

 * `TableModel $m`: The table model

Returns `int`



#### `TableModelHandler::numRowsHandler(TableModel $m)`

Method invoked to get the number of rows

 * `TableModel $m`: The table model

Returns `int`



#### `TableModelHandler::setCellValueHandler(TableModel $m, int $row, int $column, TableValue $value)`

Method invoked to set the value of a cell (as updated by the user)

 * `TableModel $m`: The table model
 * `int $row`: The row index
 * `int $column`: The column index
 * `TableValue $value`: New table cell value


