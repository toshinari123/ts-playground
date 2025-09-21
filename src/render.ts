import { sleep } from "bun";
import { printFrame } from "./frame";
import { shouldRebuild, resetShouldRebuild } from "./hooks";
import type { Widget } from "./widget";
import readline from "node:readline";

export function setup() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    readline.emitKeypressEvents(process.stdin);
}

export function teardown() {
    console.clear();
    process.stdin.setRawMode(false);
    process.exit(0);
}

export async function render(widget: Widget) {
    let elementTree = widget.createElement();
    printFrame(elementTree.draw());

    while (true) {
        if (shouldRebuild()) {
            elementTree = widget.createElement();
            resetShouldRebuild();
            printFrame(elementTree.draw());
        }
        await sleep(10);
    }
}