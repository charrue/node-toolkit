import { describe, it, expect } from "vitest";
import { findUp, findUpMultiple } from "../src/find-up";
import { resolve } from "path";

describe("findUp", () => {
  it("find fist matched file", () => {
    const filepath = findUp(
      [
        "./unknown.test.ts",
        "./find-up.test.ts",
        "./mocks/toolkit.config.ts",
      ],
      {
        cwd: __dirname,
        stopAt: resolve(__dirname, "../"),
      },
    );
    expect(filepath).toBe(resolve(__dirname, "./find-up.test.ts"));
  });

  it("find all matched files", () => {
    const filepath = findUpMultiple(
      [
        "./unknown.test.ts",
        "./find-up.test.ts",
        "./mocks/toolkit.config.ts",
      ],
      {
        cwd: __dirname,
        stopAt: resolve(__dirname, "../"),
        getAllMatched: true,
      },
    );
    expect(filepath).toEqual([resolve(__dirname, "./find-up.test.ts"), resolve(__dirname, "./mocks/toolkit.config.ts")]);
  });
});
