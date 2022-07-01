# SolidJS Webextension Starter

Simple Webextension Starter-Kit with Vite HMR and SolidJS

Based on [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension)

## Features

- Instant Vite HMR
- Typescript - type safe `manifest.json`
- Vitest
- ESLint
- Github Actions

### Included Libraries

- `webext-brige`
- `webextension-polyfill`

## Getting Started

Make sure you have [Nodejs](https://nodejs.org/en/)
and [pnpm](https://pnpm.js.org/) installed.

### Install Dependencies

```sh
pnpm install
```

### Starting Development Server

```sh
pnpm run dev
```

### Serve your extension within a browser

```sh
pnpm run serve:firefox
pnpm run serve:chrome
```
