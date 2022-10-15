import { readFileSync } from "fs";
import { join } from "path";
import { fsExists } from "./fs-exists ";

// TODO: return PackageJSON type
export const readPackageJson = (dir: string) => {
  const packageJsonPath = join(dir, "package.json");

  const exists = fsExists(packageJsonPath);

  if (!exists) {
    throw new Error(`package.json not found at: ${packageJsonPath}`);
  }

  const packageJsonString = readFileSync(packageJsonPath, "utf8");

  try {
    return JSON.parse(packageJsonString);
  } catch (error) {
    throw new Error(`Cannot parse package.json: ${(error as any).message}`);
  }
};
