---
title : "Ardillo\\AreaHandler"
description: "Ardillo base AreaHandler class"
date: 2023-08-19T20:20:13+00:00
lastmod: 2023-08-19T20:20:13+00:00
draft: false
images: []
---
### Description

Ardillo base AreaHandler class.

### Properties

#### `AreaHandler::$app`

Associated App instance

 * type: `App`



### Methods

#### `AreaHandler::dragBrokenHandler(Area $area)`

Area drag broken event handler

 * `Area $area`: The affected Area instance


#### `AreaHandler::drawHandler(Area $area, AreaDrawParams $params)`

Area draw event handler

 * `Area $area`: The affected Area instance
 * `AreaDrawParams $params`: The draw parameters


#### `AreaHandler::keyEventHandler(Area $area, AreaKeyEvent $event)`

Area key event handler

 * `Area $area`: The affected Area instance
 * `AreaKeyEvent $event`: The key event

Returns `int`



#### `AreaHandler::mouseCrossedHandler(Area $area, AreaMouseEvent $event)`

Area crossed mouse event handler

 * `Area $area`: The affected Area instance
 * `AreaMouseEvent $event`: The mouse event


#### `AreaHandler::mouseEventHandler(Area $area, AreaMouseEvent $event)`

Area mouse event handler

 * `Area $area`: The affected Area instance
 * `AreaMouseEvent $event`: The mouse event


