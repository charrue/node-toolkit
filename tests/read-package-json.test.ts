import { resolve } from "path";
import { readPackageJson } from "../src/read-package-json";
import { describe, test, expect } from "vitest";

describe("read-package-json", () => {
  test("package.json exist", () => {
    const res = readPackageJson();
    expect(res).not.toBeNull();

    expect(res?.name).toBe("@charrue/node-toolkit");
  });

  test("package.json not found", () => {
    const res = readPackageJson(resolve(__dirname, "../../"));
    expect(res).toBeNull();
  });
});
