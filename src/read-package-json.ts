import { findUp } from "./find-up";
import { fsExists } from "./fs-exists ";
import { readJson } from "./readJson";
import type { PackageJson } from "type-fest";

export const readPackageJson = (cwd?: string) => {
  const packageJsonPath = findUp("package.json", {
    cwd,
  });

  if (fsExists(packageJsonPath)) {
    try {
      const res = readJson(packageJsonPath) as PackageJson;
      return res;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  return null;
};
