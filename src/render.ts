import { sleep } from "bun";
import { printFrame } from "./frame";
import { shouldRebuild, resetShouldRebuild } from "./hooks";
import type { Widget } from "./widget";
import readline from "node:readline";

function setup() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    readline.emitKeypressEvents(process.stdin);
}

let shouldExit = false;
export const exit = () => {
    shouldExit = true;
}

function teardown() {
    console.clear();
    process.stdin.setRawMode(false);
}

export async function render(widget: Widget) {
    setup();
    let elementTree = widget.createElement();
    printFrame(elementTree.draw());

    while (true) {
        if (shouldRebuild()) {
            elementTree = widget.createElement();
            resetShouldRebuild();
            printFrame(elementTree.draw());
        }
        if (shouldExit) {
            break;
        }
        await sleep(10);
    }
    teardown();
    process.exit(0);
}