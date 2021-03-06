# parrot-module-device <a href="http://bower.io/search/?q=parrotjs"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Dependency status](http://img.shields.io/david/parrotjs/parrot-module-device.svg?style=flat)](https://david-dm.org/parrotjs/parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/parrot-module-device.svg?style=flat)](https://david-dm.org/parrotjs/parrot-module-device#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Automatically detect your device and provide some useful information: vendor, screen properties, browser vendor and version,...

## Browser Compatibility

[![browser support](https://ci.testling.com/parrotjs/parrot-module-device.png)](https://ci.testling.com/parrotjs/parrot-module-device)

## Install

```bash
npm install myModule --save
```

## Get Started

With `parrot.device` you can have useful information of your clients (Browsers, mobiles, desktops,...)

## Documentation

### parrot.device

#### .detection()

This function is called automatically when your device is ready and provide you and resume of your device.

It's insert in the `body` of your `html` useful information as [data attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes), like:

* Language (en, es,...)
* Operative System (Mac OS, Linux, Android, iOS, BlackBerry,...)
* Type of device (desktop, tablet or mobile)
* Orientation of the device (landscape or portrait)
* Type of screen (normal or small)

For example:

```html
<body data-lang="en" data-os="ios" data-device="mobile" data-orientation="portrait" data-screen="small" data-retina="false">
```

#### .noDetection()

Although `detection` is called automatically, maybe you don't want this behavior. With this function you can avoid the `detection` action and not insert the default data attributes in the `body` of your `html` .

#### .model

It's returns the technical model name of your device.

```coffee
parrot.device.model
# => iPhone, Nexus 5, GT-N7100, One, Lumia 820
```

Not always is possible determine this value.

#### .vendor

It's returns the official vendor of your device.

```coffee
parrot.device.vendor
# => Apple, Google, Samsung, HTC, Nokia,...
```

Not always is possible determine this value.

#### .cpu

It's returns the CPU arquitecture of your device.

```coffee
parrot.device.cpu
# => 68k, amd64, arm, arm64, avr, ia32, ia64, irix, irix64, mips, mips64, pa-risc, ppc, sparc, sparc64
```

Not always is possible determine this value.

#### .type

```coffee
parrot.device.type
# => desktop, tablet, mobile
```

#### .browser

It's returns the software under the browser of your device.

```coffee
parrot.device.browser
# => {name: "Chrome", version: "39.0.2171.71", major: "39"}
# => {name: "Mobile Safari", version: "4.0", major: "4"}
```

#### .engine

It's returns the thecnology under the browser software of your device.

```coffee
parrot.device.engine
# => {name: "WebKit", version: "530.17"}
```

#### .os

It's returns the software under your device.

```coffee
parrot.device.os
# => {name: "Mac OS", version: "10.10.1"}
# => {name: "iOS", version: "8.0"}
# => {name: "Android", version: "4.3"}
# => {name: "Windows Phone", version: "8.0"}
```

#### .screen

It's returns information about the screen of your device.

```coffee
parrot.device.screen
# => {aspectRatio: "16:9", width: 1080, height: 920, size: "small", orientation: "portrait", pixelRatio: 1}
```

## License

MIT © ParrotJS
