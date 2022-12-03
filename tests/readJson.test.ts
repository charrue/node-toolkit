import { describe, expect, test } from "vitest";
import { resolve } from "path";
import { readJson } from "../src/readJson";

const PKG_PATH = resolve(__dirname, "../package.json");

describe("readJson", () => {
  test("basic usage", () => {
    expect(readJson(PKG_PATH).name).toBe("@charrue/node-toolkit");
  });

  test("beforeParse option", () => {
    const beforeParse = (content: string) => content.replace("@charrue/node-toolkit", "foo");
    expect(readJson(PKG_PATH, { beforeParse }).name)
      .toBe("foo");
  });

  test("reviver option", () => {
    const reviver = (key, value) => (key === "name" ? "foo" : value);
    expect(readJson(PKG_PATH, { reviver }).name)
      .toBe("foo");
  });
});
