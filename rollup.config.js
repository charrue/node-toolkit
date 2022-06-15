import path from "path";
import rimraf from "rimraf";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonJs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

const config = [
  {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: {
      dir: path.resolve(__dirname, "dist"),
      exports: "named",
      format: "cjs",
      externalLiveBindings: false,
      freeze: false,
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      typescript({
        include: [ "src/**/*.ts" ],
        exclude: [ "/__tests__/**/*" ],
        sourceMap: false,
        declaration: true,
        declarationDir: path.resolve(__dirname, "dist"),
      }),
      commonJs(),
    ],
  },
];

rimraf.sync("./dist");
export default config;
