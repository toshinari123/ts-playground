import { Counter } from "./counter";
import { render } from "./widget";
import { consumeOnKeypressCbs, type KeyEvent } from "./hooks";
import readline from "node:readline";

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    readline.emitKeypressEvents(process.stdin);
    const widgetTree = new Counter(0);
    const elementTree = widgetTree.createElement();
    render(elementTree.draw());
    process.stdin.on("keypress", (str: string, event: KeyEvent) => {
        if (event.sequence === "\u0003") {
            console.clear();
            process.stdin.setRawMode(false);
            process.exit(0);
        }
        consumeOnKeypressCbs(event);
    });

    while (true) {
        const elementTree = widgetTree.createElement();
        render(elementTree.draw());
        await sleep(10);
    }
})();
