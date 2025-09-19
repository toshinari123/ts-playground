import { render } from "./frame";
import { consumeOnKeypressCbs, type KeyEvent } from "./hooks";
import readline from "node:readline";
import { Text } from "./widgets/text";
import { TextSlideshow } from "./text_slideshow";

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    readline.emitKeypressEvents(process.stdin);
    const widgetTree = new TextSlideshow({
        i: 0,
        strings: ["This", "is", "a", "slideshow!"],
    });
    var elementTree = widgetTree.createElement();
    render(elementTree.draw());
    process.stdin.on("keypress", (str: string, event: KeyEvent) => {
        if (event.sequence === "\u0003") {
            console.clear();
            process.stdin.setRawMode(false);
            process.exit(0);
        }
        consumeOnKeypressCbs(event);
        elementTree = widgetTree.createElement();
    });

    while (true) {
        render(elementTree.draw());
        await sleep(10);
    }
})();
