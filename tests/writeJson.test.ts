import { describe, expect, test } from "vitest";
import { resolve } from "path";
import { readFileSync } from "fs";
import { writeJson } from "../src/writeJson";
const JSON_PATH = resolve(__dirname, "./mock/foo.json");

describe("writeJson", () => {
  test("basic usage", () => {
    const data = {
      name: "foo",
    };
    writeJson(JSON_PATH, data);
    expect(readFileSync(JSON_PATH, { encoding: "utf-8" }))
      .toBe(`{"name":"foo"}`);
  });

  test("replacer option", () => {
    const data = {
      foundation: "Mozilla",
      model: "box",
      week: 45,
      transport: "car",
      month: 7,
    };
    const replacer = (key: string, value: any) => {
      if (typeof value === "string") {
        return undefined;
      }
      return value;
    };
    writeJson(JSON_PATH, data, {
      replacer,
    });
    expect(readFileSync(JSON_PATH, { encoding: "utf-8" }))
      .toBe(`{"week":45,"month":7}`);
  });

  test("replacer space", () => {
    const data = {
      name: "foo",
    };
    writeJson(JSON_PATH, data, {
      space: 2,
    });
    expect(readFileSync(JSON_PATH, { encoding: "utf-8" }))
      .toBe(`{\n  "name": "foo"\n}`);
  });
});
