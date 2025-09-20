import { render } from "./frame";
import { consumeOnKeypressCbs, type KeyEvent } from "./hooks";
import readline from "node:readline";
import { Text } from "./widgets/text";
import { TextSlideshow } from "./widgets/text_slideshow";
import { TextField } from "./widgets/textfield";
import { Column } from "./widgets/column";
import { Counter } from "./widgets/counter";
import { Row } from "./widgets/row";
import { DebugSize } from "./widgets/debug_size";

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    readline.emitKeypressEvents(process.stdin);
    const widgetTree = new DebugSize(new TextField({}));
    let elementTree = widgetTree.createElement();
    render(elementTree.draw());
    process.stdin.on("keypress", (str: string, event: KeyEvent) => {
        if (event.sequence === "\u0003") {
            console.clear();
            process.stdin.setRawMode(false);
            process.exit(0);
        }
        // console.log(event);
        consumeOnKeypressCbs(event);
        elementTree = widgetTree.createElement();
    });

    while (true) {
        render(elementTree.draw());
        await sleep(10);
    }
})();
