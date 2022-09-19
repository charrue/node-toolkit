import { accessSync } from "fs";

export const fsExists = (path:string) => {
  try {
    accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
};
