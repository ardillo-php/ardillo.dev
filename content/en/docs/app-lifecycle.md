---
title: "App Lifecycle"
description: ""
lead: ""
date: 2023-09-08T21:14:02Z
lastmod: 2023-09-08T21:14:02Z
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "app-lifecycle-e6b3d51ce470dc54926583a03f05f8eb"
weight: 999
toc: true
---
There are two key consderations to keep in mind when developing your next Ardillo app:

- the PHP objects lifecycle;
- employing the `Ardillo\App` and `Ardillo\ReactApp` classes.

### PHP Objects Lifecycle

Ardillo follows the PHP objects lifecycle, i.e. it does not introduce any hidden references to the objects it creates. This means the developer is responsible for keeping the objects alive as long as they are needed. This seems obvious for traditional PHP use cases (web development), but may be counter intuitive for long running processes, specifically more so for desktop applications.

Let's analyze a use from the provided [Ardillo examples](https://github.com/ardillo-php/examples), namely the Ardillo DNS client Preferences Window, defined [here](https://github.com/ardillo-php/examples/blob/master/src/Dns/Prefs/Window.php).

Please note how the extended `Window` class is holding references to all its children objects as member properties. The idea is to keep the corresponding children objects alive during the lifetime of the said preferences window, even for static UI objects such as labels. Had we omitted the referenece to any of those objects, they would have been garbage collected as soon as the creating method completed its execution, thus never rendered visually to the user.

Passing the responsibility of keeping objects alive to the developer is a deliberate design choice that allows for more flexibility and control over the application lifecycle. It also allows for a more efficient use of memory, as the developer can decide when to release objects that are no longer needed. Likewise, it also prevents certain memory safety issues that would lead to undefined behavior, possibly even crashes (segmenation faults).

### Ardillo App Classes

Ardillo provides a base [`Ardillo\App` class](/docs/0.1.x/classes/app/) for low-level application flow control. However, the envisioned use case is for developers to use the [`ardillo/loop` package](https://packagist.org/packages/ardillo/loop) instead, which also provides a `Ardillo\ReactApp` class which abstracts away the event loop creation and its management, allowing the developer to focus on the application logic.

As with most Ardillo classes, the developer is expected to extend the `Ardillo\ReactApp` class and implement the `OnInit()` method, which is called once the event loop is running. Once the application class is instantiated, the developer should immediately call the `run()` method, which will start the event loop (and eventually call the `OnInit()` method).

Please note that unlike typical ReactPHP event loop implementations, the Ardillo Loop cannot be restarted, i.e. once the application is signalled to exit, it must initiate its own shutdown sequence and exit the process. Given the nature of desktop applications, this should not be a limiting factor, however it can affect one's approach to unattended testing.
