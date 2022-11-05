import { readFileSync } from "fs";
import { fsExists } from "./fs-exists ";
import { stripBom } from "./stripBom";

interface ReadJsonOption {
  beforeParse?: (content: string) => string;
  reviver?: (this: any, key: string, value: any) => any;
}

const parse = (buffer: Buffer, { beforeParse, reviver }: ReadJsonOption = {}) => {
  let content = stripBom(buffer);

  if (typeof beforeParse === "function") {
    content = beforeParse(content);
  }

  return JSON.parse(content, reviver);
};

export const readJson = (filePath: string, options: ReadJsonOption = {}) => {
  if (!fsExists(filePath)) {
    throw new Error(`${filePath} not exist.`);
  }

  const buffer = readFileSync(filePath);
  return parse(buffer, options);
};
