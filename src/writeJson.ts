import { writeFileSync } from "fs";
import { ensureDir } from "./ensure-dir";

export const writeJson = (
  filePath: string,
  data: any,
  option: {
    replacer?: ((key: string, value: any) => any),
    space?: string | number
  } = {},
) => {
  ensureDir(filePath);
  const { replacer, space } = option;

  const content = JSON.stringify(data, replacer, space);
  return writeFileSync(filePath, content, {
    encoding: "utf-8",
  });
};
