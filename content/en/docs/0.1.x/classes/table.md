---
title : "Ardillo\\Table"
description: "Ardillo base Table class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Table class.

### Properties

#### `Table::$app`

Associated App instance

 * type: `App`



### Methods

#### `Table::__construct(TableParams $params)`

Creates a new Table instance

 * `TableParams $params`: The table parameters


#### `Table::isValid()`

Returns whether the table is valid or not


Returns `bool`



#### `Table::getColumnWidth(int $column)`

Returns the width of a column at a given index

 * `int $column`: The column index

Returns `int`



#### `Table::setColumnWidth(int $column, int $width)`

Sets the width of a column at a given index

 * `int $column`: The column index
 * `int $width`: The width to be set


#### `Table::getHeaderSortIndicator(int $column)`

Returns the sort indicator of a column at a given index

 * `int $column`: The column index

Returns `int`



#### `Table::setHeaderSortIndicator(int $column, int $indicator)`

Sets the sort indicator of a column at a given index

 * `int $column`: The column index
 * `int $indicator`: The sort indicator to be set (use the TableSortIndicator class integer constants)


#### `Table::getHeaderVisible()`

Returns whether the table header is visible or not


Returns `bool`



#### `Table::setHeaderVisible(bool $visible)`

Sets whether the table header is visible or not

 * `bool $visible`: 


#### `Table::getSelectionMode()`

Returns the current table selection mode


Returns `int`



#### `Table::setSelectionMode(int $mode)`

Sets the table selection mode

 * `int $mode`: The selection mode to be set (use the TableSelectionMode class integer constants)


#### `Table::onHeaderClicked(int $column)`

Callback to be executed when the table header is clicked

 * `int $column`: The index of the column that was clicked


#### `Table::onRowClicked(int $row)`

Callback to be executed when a row is clicked

 * `int $row`: The index of the row that was clicked


#### `Table::onRowDoubleClicked(int $row)`

Callback to be executed when a row is double-clicked

 * `int $row`: The index of the row that was double-clicked


#### `Table::appendButtonColumn(string $name, int $buttonModelColumn, int $buttonClickableModelColumn)`

Appends a button columnt to the table

 * `string $name`: The column name
 * `int $buttonModelColumn`: The model column that will be used to get the button text
 * `int $buttonClickableModelColumn`: Use TableModelColumn class integer constants


#### `Table::appendCheckboxColumn(string $name, int $checkboxModelColumn, int $checkboxEditableModelColumn)`

Appends a checkbox column to the table

 * `string $name`: The column name
 * `int $checkboxModelColumn`: The model column that will be used to get the checkbox state
 * `int $checkboxEditableModelColumn`: Use TableModelColumn class integer constants


#### `Table::appendCheckboxTextColumn(string $name, int $checkboxModelColumn, int $checkboxEditableModelColumn, int $textModelColumn, int $textEditableModelColumn, TableTextColumnOptionalParams $textParams)`

Appends a checkbox text column to the table

 * `string $name`: The column name
 * `int $checkboxModelColumn`: The model column that will be used to get the checkbox state
 * `int $checkboxEditableModelColumn`: Use TableModelColumn class integer constants
 * `int $textModelColumn`: The model column that will be used to get the text
 * `int $textEditableModelColumn`: Use TableModelColumn class integer constants
 * `TableTextColumnOptionalParams $textParams`: The text column optional parameters


#### `Table::appendImageColumn(string $name, int $imageModelColumn)`

Appends an image column to the table

 * `string $name`: The column name
 * `int $imageModelColumn`: The model column that will be used to get the image


#### `Table::appendImageTextColumn(string $name, int $imageModelColumn, int $textModelColumn, int $textEditableModelColumn, TableTextColumnOptionalParams $textParams)`

Appends an image text column to the table

 * `string $name`: The column name
 * `int $imageModelColumn`: The model column that will be used to get the image
 * `int $textModelColumn`: The model column that will be used to get the text
 * `int $textEditableModelColumn`: Use TableModelColumn class integer constants
 * `TableTextColumnOptionalParams $textParams`: The text column optional parameters


#### `Table::appendProgressBarColumn(string $name, int $progressModelColumn)`

Appends a progress bar column to the table

 * `string $name`: The column name
 * `int $progressModelColumn`: The model column that will be used to get the progress value


#### `Table::appendTextColumn(string $name, int $textModelColumn, int $textEditableModelColumn, TableTextColumnOptionalParams $textParams)`

Appends a text column to the table

 * `string $name`: The column name
 * `int $textModelColumn`: The model column that will be used to get the text
 * `int $textEditableModelColumn`: Use TableModelColumn class integer constants
 * `TableTextColumnOptionalParams $textParams`: The text column optional parameters


#### `Table::onSelectionChanged(array<int> $selection)`

Callback to be executed when the table selection is updated

 * `array<int> $selection`: List of row indices which are selected


#### `Table::setSelection(array<int> $selection)`

Sets the current table selection

 * `array<int> $selection`: List of row indices to be selected


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



