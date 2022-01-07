import {builtinModules} from "module";
import {get} from "http";
import {green} from "chalk";

/** 轮询监听 vite 启动 */
export function waitOn() {
  return new Promise((resolve) => {
    const url = `http://localhost:80`;
    let counter = 0;
    const timer: NodeJS.Timer = setInterval(() => {
      get(url, (res) => {
        clearInterval(timer);
        console.log(
            "[waitOn]",
            green(`"${url}" are already responsive.`),
            `(${res.statusCode}: ${res.statusMessage})`
        );
        resolve(res.statusCode);
      }).on("error", (err) => {
        console.log("[waitOn]", `counter: ${counter++}`);
      });
    }, 149);
  });
}

/** node.js builtins module */
export const builtins = () =>
    builtinModules.filter((x) => !/^_|^(internal|v8|node-inspect)\/|\//.test(x));
