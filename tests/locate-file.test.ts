import { describe, it, expect } from "vitest";
import { resolve } from "path";
import { locatePath } from "../src/locate-file";

describe("locate-file", () => {
  it("locatePath matched file", () => {
    const filePath1 = locatePath(["./locate-file.test.ts", "./locateFile.test.ts"], {
      cwd: __dirname,
    });
    expect(filePath1).toBe("./locate-file.test.ts");

    const filePath2 = locatePath(["src", "unknown"], {
      cwd: resolve(__dirname, "../src"),
    });
    expect(filePath2).toBe(undefined);
  });

  it("locatePath matched directory", () => {
    const filePath2 = locatePath([ "mocks" ], {
      cwd: resolve(__dirname, "."),
      type: "directory",
    });
    expect(filePath2).toBe("mocks");
  });

  it("locatePath get all matched files", () => {
    const filePath1 = locatePath([
      "./locate-file.test.ts",
      "./find-up.test.ts",
      "./locatefile.test.ts",
    ], {
      cwd: __dirname,
      getAllMatched: true,
    });
    expect(filePath1).toEqual(["./locate-file.test.ts", "./find-up.test.ts"]);
  });

  it("locatePath get matched absolute file", () => {
    const filePath1 = locatePath([
      "./locate-file.test.ts",
      "./find-up.test.ts",
      "./locatefile.test.ts",
    ], {
      cwd: __dirname,
      getAllMatched: true,
      absolute: true,
    });
    expect(filePath1).toEqual(["./locate-file.test.ts", "./find-up.test.ts"].map((t) => resolve(__dirname, t)));
  });
});
