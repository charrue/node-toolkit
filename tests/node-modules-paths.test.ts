import { describe, test, expect } from "vitest";
import { nodeModulesPaths } from "../src/node-modules-paths";
import { resolve } from "path";
import { fsExists } from "../src/fs-exists ";

describe("nodeModulesPaths", () => {
  test("default", () => {
    const paths = nodeModulesPaths(__dirname).filter(fsExists);
    expect(paths).toEqual([resolve(__dirname, "../node_modules")]);
  });
});
