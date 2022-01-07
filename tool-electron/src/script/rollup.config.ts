import {resolve} from "path";
import {RollupOptions} from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import {builtins} from "./utils";

export default (env = "production") => {
  const options: RollupOptions = {
    input: resolve("src/main/index.ts"),
    output: {
      file: resolve("dist/main/index.js"),
      format: "cjs",
      name: "ElectronMainBundle",
      sourcemap: env !== "production",
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      typescript({
        module: "ESNext",
      }),
    ],
    external: [...builtins(), "electron"],
  };

  return options;
};
