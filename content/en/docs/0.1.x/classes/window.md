---
title : "Ardillo\\Window"
description: "Ardillo base Window class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base Window class.

### Constants

 * `Window::MESSAGE_BOX_DEFAULT` = `0`
 * `Window::MESSAGE_BOX_ERROR` = `1`


### Properties

#### `Window::$app`

Associated App instance

 * type: `App`



### Methods

#### `Window::__construct(string $title, Size $size, bool $hasMenubar)`

Creates a new Window instance

 * `string $title`: The window title
 * `Size $size`: The window size
 * `bool $hasMenubar`: Whether the window has a menu bar or not


#### `Window::isValid()`

Returns whether the window is valid or not


Returns `bool`



#### `Window::getBorderless()`

Returns whether the window is borderless or not


Returns `bool`



#### `Window::setBorderless(bool $borderless)`

Sets whether the window is borderless or not

 * `bool $borderless`: 


#### `Window::getContentSize()`

Returns the window's size


Returns `Size`



#### `Window::setContentSize(Size $size)`

Sets the window's size

 * `Size $size`: The window's size


#### `Window::getFullscreen()`

Returns whether the window is fullscreen or not


Returns `bool`



#### `Window::setFullscreen(bool $fullscreen)`

Sets whether the window is fullscreen or not

 * `bool $fullscreen`: 


#### `Window::getMargined()`

Returns whether the window is margined or not


Returns `bool`



#### `Window::setMargined(bool $margined)`

Sets whether the window is margined or not

 * `bool $margined`: 


#### `Window::getPosition()`

Returns the window's position


Returns `Point`



#### `Window::setPosition(Point $pos)`

Sets the window's position

 * `Point $pos`: The window's position


#### `Window::getResizeable()`

Returns whether the window is resizable or not


Returns `bool`



#### `Window::setResizeable(bool $resizeable)`

Sets whether the window is resizable or not

 * `bool $resizeable`: 


#### `Window::getTitle()`

Returns the window's title


Returns `string`



#### `Window::setTitle(string $title)`

Sets the window's title

 * `string $title`: The window's title


#### `Window::onClosing()`

Callback executed when the window is being closed


Returns `int`



#### `Window::onContentSizeChanged()`

Callback executed when the window is resized



#### `Window::onFocusChanged()`

Callback executed when the window loses/gains focus



#### `Window::onPositionChanged()`

Callback executed when the window is moved



#### `Window::isFocused()`

Returns whether the window is focused or not


Returns `bool`



#### `Window::setChild(Control $child)`

Appends a control to the window

 * `Control $child`: The child control to be appended


#### `Window::messageBox(int $type, string $title, string $content)`

Shows a message box

 * `int $type`: The message box type (use the MESSAGE_BOX_* class integer constants)
 * `string $title`: The message box title
 * `string $content`: The message box content


#### `Window::openFolder()`

Displays OS's directory open directory dialog


Returns `string|null`



#### `Window::openFile()`

Displays OS's file open dialog


Returns `string|null`



#### `Window::saveFile()`

Displays OS's file save dialog


Returns `string|null`



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



