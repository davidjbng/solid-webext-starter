/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import webExtension from 'vite-plugin-web-extension';
import path from 'node:path';

export default defineConfig({
  root: 'src',
  plugins: [
    solidPlugin(),
    // webExtension({
    //   manifest: path.resolve(__dirname, 'manifest.json'),
    //   assets: 'assets',
    // },),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest.ts',
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
},);
