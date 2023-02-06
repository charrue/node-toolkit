import { createRequire } from "module";

export const resolvePkgPath = (pkg: string) => {
  const pkgPath = createRequire(import.meta.url).resolve(pkg);
  return pkgPath;
};
