/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'node:path';
import webExtension from '@samrum/vite-plugin-web-extension';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    solidPlugin(),
    webExtension({
      manifest: {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        manifest_version: 3,
        background: {
          service_worker: 'index.ts',
        },
      },
    }),
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
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
