---
title: "Quick Start"
description: ""
lead: ""
date: 2023-09-08T21:13:03Z
lastmod: 2023-09-08T21:13:03Z
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "quick-start-f16223a996cb2e677706621fa81921a2"
weight: 999
toc: true
---
Before getting started, we need to build an install the [Ardillo extension](https://github.com/ardillo-php/ext#build-requirements) in the development/target environment. Then, for each new Ardillo project, we need to install the Ardillo Loop package:

```sh
composer require ardillo/loop
```

### Hello World example

At this point, we can start developing our Ardillo application. The following example shows a simple Ardillo application that displays a window with a label:

![Hello World](/images/shots/hello-world.png)

```php
<?php

use Ardillo\{ReactApp, Label, Size, Window};

require_once __DIR__ . '/vendor/autoload.php';

// Please use PSR-4 class autoloading in your own projects, this is just an example
class MyWindow extends Window
{
    protected Label $label;

    public function onClosing(): int
    {
        $this->app->stop();

        return 1;
    }

    public function setup(): void
    {
        $this->label = new Label('Hello World!');
        $this->setChild($this->label);
    }
}

class MyApp extends ReactApp
{
    public Window $window;

    protected function OnInit(): void
    {
        $this->window = new MyWindow('My App', new Size(400, 300), false);
        $this->window->setup();
        $this->window->show();
    }
}

$app = new MyApp();
$app->run();
```

Please note how the application class holds a reference to its window and the latter does the same for its label. This is necessary to keep the objects alive during the application lifecycle. Please refer to the [App Lifecycle](/docs/app-lifecycle/) section for more details.

### References

- [Documentation for Ardillo classes](/docs/0.1.x/classes/)
- [Ardillo examples](https://github.com/ardillo-php/examples)
- [Ardillo extension repository](https://github.com/ardillo-php/ext)
- [Ardillo Loop package](https://packagist.org/packages/ardillo/loop)
- [Ardillo Loop repository](https://github.com/ardillo-php/loop)
