import { unlinkSync } from "fs";
import rimraf from "rimraf";

export async function rmdir(dir: string) {
  await unlinkSync(dir);
  await rimraf.sync(dir);
}
