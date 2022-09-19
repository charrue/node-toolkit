import { mkdirSync } from "fs";
import { dirname } from "path";

export async function ensureDir(path: string) {
  await mkdirSync(dirname(path));
}
