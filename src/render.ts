import { sleep } from "bun";
import { printFrame } from "./frame";
import type { Widget } from "./widget";
import readline from "node:readline";
//import { writeFileSync } from "node:fs";
import {onKeypress, type KeyEvent} from "./hooks";

function setup() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    readline.emitKeypressEvents(process.stdin);
}

let currentlyFocusedWidget: Widget | null;
function setupFocus(root: Widget) {
    onKeypress((event: KeyEvent) => {
        if (event.name === 'f') {
            //writeFileSync('log', 'changing focus...\n', { flag: 'a' });
            let beginning = currentlyFocusedWidget || root;
            let cur = beginning;
            while (true) {
                if (cur.children[0]) {
                    cur = cur.children[0];
                } else {
                    while (cur.parent && !cur.parent.widget.children[cur.parent.index + 1]) {
                        cur = cur.parent.widget;
                    }
                    // `|| cur` below are hacks to get around type check
                    if (!cur.parent) {
                        cur = cur.children[0] || cur;
                    } else {
                        cur = cur.parent.widget.children[cur.parent.index + 1] || cur;
                    }
                }
            //writeFileSync('log', `  cur: ${cur.constructor.name}\n`, { flag: 'a' });
                if (cur.focusable) {
                    currentlyFocusedWidget = cur;
                    break;
                }
                if (cur === beginning) break;
            }
            //writeFileSync('log', `cur: ${cur.constructor.name}\n`, { flag: 'a' });
        } else {
            if (currentlyFocusedWidget && currentlyFocusedWidget.keypressCb) {
                currentlyFocusedWidget.keypressCb(event);
            }
        }
    });
}

let shouldExit = false;
export const exit = () => {
    shouldExit = true;
};

function teardown() {
    console.clear();
    process.stdin.setRawMode(false);
}

export async function render(widget: Widget) {
    setup();
    setupFocus(widget);
    let elementTree = widget.createElement();
    printFrame(elementTree.draw());

    while (true) {
        elementTree = widget.createElement();
        printFrame(elementTree.draw());
        if (shouldExit) {
            break;
        }
        await sleep(10);
    }

    teardown();
    process.exit(0);
}
