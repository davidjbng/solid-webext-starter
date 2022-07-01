import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import webExtension from '@samrum/vite-plugin-web-extension';
import { getManifest } from './src/manifest';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [solidPlugin(), webExtension({ manifest: getManifest() })],
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    coverage: { enabled: true },
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
