---
title : "Ardillo\\App"
description: "Ardillo base App class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base App class.

### Constants

 * `App::SIGHUP` = `1`
 * `App::SIGINT` = `2`
 * `App::SIGQUIT` = `3`
 * `App::SIGILL` = `4`
 * `App::SIGTRAP` = `5`
 * `App::SIGABRT` = `6`
 * `App::SIGFPE` = `8`
 * `App::SIGKILL` = `9`
 * `App::SIGSEGV` = `11`
 * `App::SIGPIPE` = `13`
 * `App::SIGALRM` = `14`
 * `App::SIGTERM` = `15`


### Methods

#### `App::get()`

Returns the current App instance, or null if one is not instantiated (static method)


Returns `App|null`



#### `App::run()`

Initiates the internal Ardillo event loop for the current App instance. Please note the internal event loop is the one provided by libui-ng, not the one provided by ReactPHP.



#### `App::stop()`

Stops the internal Ardillo event loop for the current App instance.



#### `App::appendMenu(Menu|null $parent, int $type, int $id, string|null $label)`

Appends a menu entry for the current App instance.

 * `Menu|null $parent`: The parent menu, or null if this is a top-level menu
 * `int $type`: The type of menu entry to append (use the Menu class integer constants)
 * `int $id`: The ID of the menu entry (this is passed to the onMenuItemClicked() callback)
 * `string|null $label`: The label of the menu entry, or null if this is a separator or an OS managed menu entry

Returns `Menu`



#### `App::scheduleTask(Task $task, int $interval)`

Schedules a task to be executed in a future internal loop tick or periodically.

 * `Task $task`: The task to be scheduled
 * `int $interval`: Execution interval in milliseconds or 0 for a one-time execution


#### `App::addReadStream(resource $stream, StreamEventHandler $handler)`

Adds a readable stream to the internal event loop watcher

 * `resource $stream`: The stream to be watched
 * `StreamEventHandler $handler`: Handler to be invoked when the stream registers read events

Returns `int`



#### `App::addWriteStream(resource $stream, StreamEventHandler $handler)`

Adds a writable stream to the internal event loop watcher

 * `resource $stream`: The stream to be watched
 * `StreamEventHandler $handler`: Handler to be invoked when the stream registers write events

Returns `int`



#### `App::removeReadStream(int $fd)`

Removes a readable stream from the internal event loop watcher

 * `int $fd`: The file descriptor of the stream as returned by addReadStream()


#### `App::removeWriteStream(int $fd)`

Removes a writable stream from the internal event loop watcher

 * `int $fd`: The file descriptor of the stream as returned by addWriteStream()


#### `App::addSignal(int $signo)`

Adds a signal to the internal event loop watcher

 * `int $signo`: The signal number to be watched (use the App class integer constants)


#### `App::removeSignal(int $signo)`

Removes a signal from the internal event loop watcher

 * `int $signo`: The signal number to be removed (use the App class integer constants)


