# SolidJS Webextension Starter

Simple Webextension Starter-Kit with Vite HMR and SolidJS

Based on [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension)

## Features

- Instant Vite HMR
- Typescript - type safe `manifest.json`
- Vitest
- ESLint
- Github Actions

## Getting Started

Make sure you have [Nodejs](https://nodejs.org/en/)
and [pnpm](https://pnpm.js.org/) installed.

### Install Dependencies

```sh
pnpm i
```

## Development

Run the commands in separate terminals.

### Chrome

```sh
pnpm run dev
```

```sh
pnpm run serve:chrome
```

### Firefox

> Unfortunately does not support loading content scripts from localhost
> so you need to use `vite build --watch` for now.

```sh
pnpm run watch
```

```sh
pnpm run serve:firefox
```
