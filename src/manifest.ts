import { Manifest } from 'webextension-polyfill';
import type PkgType from '../package.json';
import { resolve } from 'node:path';
import fs from 'fs-extra';

export function getManifest(): Manifest.WebExtensionManifest {
  const pkg = fs.readJSONSync(
    resolve(__dirname, '..', 'package.json')
  ) as typeof PkgType;

  return {
    manifest_version: 2,
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    background: {
      scripts: ['src/background/script.ts'],
      persistent: false,
    },
    content_scripts: [
      {
        js: ['src/contentScript/main.ts'],
        matches: ['http://*/*', 'https://*/*'],
      },
    ],
    browser_action: {
      default_popup: 'src/popup/index.html',
      default_icon: 'icon-512.png',
    },
    options_ui: {
      page: 'src/options/index.html',
      chrome_style: false,
      open_in_tab: true,
    },
    icons: {
      16: 'icon-16.png',
      48: 'icon-48.png',
      512: 'icon-512.png',
    },
    permissions: ['tabs', 'storage', 'activeTab', 'http://*/', 'https://*/'],
  };
}
