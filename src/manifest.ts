import { Manifest } from "webextension-polyfill";
import type PkgType from "./package.json";
import { resolve } from "node:path";
import fs from "fs-extra";

export function getManifest(): Manifest.WebExtensionManifest {
  const pkg = fs.readJSONSync(
    resolve(__dirname, "package.json")
  ) as typeof PkgType;

  return {
    manifest_version: 2,
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    background: {
      service_worker: "index.ts",
    },
  };
}
