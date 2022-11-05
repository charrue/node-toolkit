import { execSync } from "child_process";

export const exec = (cmd: string, cwd: string = process.cwd()) => execSync(cmd, {
  cwd,
  stdio: ["pipe", "pipe", "pipe"],
}).toString();
