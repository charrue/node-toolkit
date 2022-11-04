import { mkdirSync } from "fs";
import { dirname } from "path";

export function ensureDir(path: string) {
  mkdirSync(dirname(path), { recursive: true });
}
