import { findUp } from "./find-up";
import { dirname } from "path";

export const resolvePkgRoot = (pkg: string) => {
  const pkgPath = require.resolve(pkg);
  const filePath = findUp("package.json", { cwd: pkgPath });
  if (filePath) {
    return dirname(filePath);
  }
  return undefined;
};
