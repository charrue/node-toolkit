import { parse, resolve } from "path";

export const nodeModulesPaths = (start: string, moduleDirs: string[] = ["node_modules"]) => {
  let prefix = "/";
  if ((/^([A-Za-z]:)/).test(start)) {
    prefix = "";
  } else if ((/^\\\\/).test(start)) {
    prefix = "\\\\";
  }

  const paths = [start];
  let parsed = parse(start);
  while (parsed.dir !== paths[paths.length - 1]) {
    paths.push(parsed.dir);
    parsed = parse(parsed.dir);
  }

  return paths.reduce(
    (dirs, aPath) => dirs.concat(moduleDirs.map((moduleDir) => {
      const dir = resolve(prefix, aPath, moduleDir);
      return dir;
    })),
    [] as string[],
  );
};
