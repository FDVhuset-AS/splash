# Splash

### The tiny loading screen for web artisans

<br>

[![Build](https://github.com/isakhauge/Splash/actions/workflows/ci.yml/badge.svg?branch=production)](https://github.com/isakhauge/Splash/actions/workflows/ci.yml) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/Splash) [![Coverage](https://img.shields.io/badge/Coverage-99%25-brightgreen)](./coverage/index.html) [![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/) [![Last Commit](https://img.shields.io/github/last-commit/isakhauge/Splash)](https://github.com/isakhauge/Splash/commits/production)

<br>

## Get started

### Install via CDN

When installing via CDN, you will always get the latest version, and CSS is included inside the bundle.

```html
<script src="https://unpkg.com/@famac/splash/dist/latest/iife/splash.iife.js">
```

Pros:

- Easy to get started.
- Always get the latest version.
- CSS is included inside the bundle.

Cons:

- Always get the latest version.

### Install via NPM

```bash
yarn add @famac/splash
```

```js
import { Service } from '@famac/splash'
Service.start()
```

The CSS file is located in the following path:

```text
node_modules/@famac/splash/dist/latest/es/style.css
```

### Example usage

It's so simple to use.

```js
// Display a fullscreen loading screen
splash.show('Loading')

axios.get('/api/users')
    .then((response) => /* Do something */ )
    .finally(() => {
        // Hide it when you're done
        splash.hide()
    })
```

### TLDR

```js
// Fullscreen spinning wheel
splash.show()

// Fullscreen spinning wheel with text
splash.show('Loading')

// Display inside an element
splash.showInside('#my-table', 'Fetching data')

// Hide the last created loading screen (LIFO)
splash.hide()

// Hide loading screen inside an element
splash.hideInside('#my-table')

// Hide specific loading screen
const id = splash.show('Loading')
splash.hideId(id)

// Hide all loading screens
splash.hideAll()
```

## API Documentation

### Show

This method displays a fullscreen loading screen and returns a GUID string.

```ts
splash.show(text?: string): GUIDString
```

If you enter no text, it will display the spinning wheel only.

```js
splash.show() // Spinner only
splash.show('Loading') // Spinner with text
```

### Show inside

This method displays a fullscreen loading screen inside an element and returns a GUID string.

```ts
splash.showInside(ref: Reference, text?: string): GUIDString | null
```

The `Reference` type is a union type of `string | Element`. The `string` type is a CSS selector string. The `Element` type is a DOM element.

```js
// Both works
const selector = '#my-table'
const element = document.getElementById('my-table')
splash.showInside(selector, 'Loading')
splash.showInside(element, 'Loading')
```

### Hide

Hides the last created loading screen (LIFO).

```ts
splash.hide(): GUIDString | null
```

The reason why the hide function works in a LIFO (last in first out) manner is because you should always see the loading screen that you want to hide, which will always be the last one you created.

```js
splash.show('a')
splash.show('b')
splash.show('c')
splash.hide() // Hides 'c'
splash.hide() // Hides 'b'
splash.hide() // Hides 'a'
```

> 💡 **PRO Tip:** If you have multiple loading screens open at the same time, I would recommend that you hide specific elements based on their GUID or host element. See `hideId` and `hideInside` for more information.

### Hide by ID

Hides the Splash loading screen with the given GUID string.

```ts
splash.hideId(guid: GUIDString): GUIDString | null
```

The show methods always retrun a GUID. This identifier can be used to hide specific loading screesplash.

```js
const id = splash.show('Loading')
splash.hideId(id)
```

### Hide inside

Hides the Splash loading screen inside another element — if any — that corresponds with the given element reference. Returns the GUID string of the loading screen that was hidden, or null if no loading screen was found inside.

```ts
splash.hideInside(ref: Reference): GUIDString | null
```

This method works almost the same way as `hideId`, but instead of using the GUID string as the identifier, it uses the host element as the identifier.

```js
const selector = '#my-table'
splash.showInside(selector, 'Loading')
splash.hideInside(selector)
```

You can also use the `Element` type as the reference.

```js
const element = document.getElementById('my-table')
splash.showInside(element, 'Loading')
splash.hideInside(element)
```

### Hide all

Hide all Splash loading screens.

```ts
splash.hideAll(): void
```
