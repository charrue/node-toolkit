import { describe, test, expect } from "vitest";
import { resolvePkgPath } from "../src/resolve-pkg-path";
import { existsSync } from "fs";

describe("resolve-pkg-path", () => {
  test("should resolve pkg path", () => {
    const filePath = resolvePkgPath("vitest");
    expect(existsSync(filePath)).toBe(true);
  });
});
