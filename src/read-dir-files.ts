import { readdirSync, statSync } from "fs";
import { resolve } from "path";

export const readDirFiles = (path: string) => {
  const filenames = new Set<string>();
  const walk = (p: string) => {
    const files = readdirSync(path);

    files.forEach((file) => {
      const fullPath = resolve(p, file);
      if (statSync(fullPath).isDirectory()) {
        filenames.add(`${fullPath}/`);
        walk(fullPath);
      } else {
        filenames.add(fullPath);
      }
    });
  };

  walk(path);
  return Array.from(filenames);
};
