import { describe, test, expect } from "vitest";
import { getNodeVersion, getNodeMajorVersion } from "../src/get-node-version";

describe("get-node-version", () => {
  test("getNodeVersion", () => {
    expect(getNodeVersion()).toBeDefined();
  });

  test("getNodeMajorVersion", () => {
    expect(getNodeMajorVersion()).toBeDefined();
  });
});
