import { describe, test, expect } from "vitest";
import { resolvePkgRoot } from "../src/resolve-pkg-root";
import { existsSync } from "fs";

describe("resolve-pkg-root", () => {
  test("should resolve pkg root", () => {
    const filePath = resolvePkgRoot("vitest");
    console.log(filePath);
    expect(existsSync(filePath!)).toBe(true);
  });
});
