/**
 * electron 打包
 */
import { resolve } from "path";
import { ChildProcess, spawn } from "child_process";
import { OutputOptions, rollup, RollupBuild, watch } from "rollup";
import minimist from "minimist";
import chalk from "chalk";
import ora from "ora";
import electron from "electron";
import dotenv from "dotenv-flow";
import { waitOn } from "./utils";
import options from "./rollup.config";
import { main } from "../../package.json";

// @ts-ignore
const argv = minimist(process.argv.slice(2));
dotenv.config({ path: resolve(), node_env: argv.env });

const opts = options(argv.env);
const TAG = "[build-main.ts]";
const spinner = ora(`${TAG} Electron build...`);

if (argv.watch) {
  waitOn().then(() => {
    const watcher = watch(opts);
    let child: ChildProcess;
    watcher.on("change", (filename) => {
      const log = chalk.green(`change -- ${filename}`);
      console.log(TAG, log);
    });
    watcher.on("event", (ev) => {
      if (ev.code === "END") {
        if (child) child.kill();
        child = spawn(electron as any, [resolve(main)], {
          stdio: "inherit",
        });
      } else if (ev.code === "ERROR") {
        console.log(ev.error);
      }
    });
  });
} else {
  spinner.start();
  rollup(opts)
    .then((build: RollupBuild) => {
      spinner.stop();
      console.log(TAG, chalk.green("Electron build successed."));
      build.write(opts.output as OutputOptions);
    })
    .catch((error: any) => {
      spinner.stop();
      console.log(`\n${TAG} ${chalk.red("构建报错")}\n`, error, "\n");
    });
}
