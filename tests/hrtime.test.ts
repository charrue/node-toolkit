import { test, expect } from "vitest";
import { hrtime } from "../src/hrtime";

const wait = (time: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(time);
  }, time);
});

test("hrtime()", async () => {
  const end = hrtime();
  const TIME = 1000;
  await wait(TIME);

  expect(end()).toBeGreaterThanOrEqual(TIME);
});

test("hrtime(type)", async () => {
  const end = hrtime();
  const TIME = 1000;
  await wait(TIME);

  expect(end("second").toFixed(0)).toBe("1");

  expect(typeof end("nanosecond")).toBe("number");
});
