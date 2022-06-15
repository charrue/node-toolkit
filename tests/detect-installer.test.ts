import { describe, it, expect } from "vitest";
import { detectInstaller } from "../src/detect-installer";

describe("detect-installer", () => {
  it("usage", () => {
    expect(detectInstaller(__dirname)).toBe("pnpm");
  });
});
