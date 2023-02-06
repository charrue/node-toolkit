import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  dts: {
    resolve: true,
  },
  format: ["cjs", "esm"],
  platform: "node",
  treeshake: true,
});
