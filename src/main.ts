import { Counter } from "./counter";
import { consumeOnClickCbs, render } from "./widget";

async function getSingleCharacter(timeout: number): Promise<string | null> {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            resolve(null); // Resolve with null if timeout occurs
        }, timeout);

        // Set up the read listener
        resolve(prompt(""));
        // read({
        //     onData: (data: string) => {
        //         clearTimeout(timer); // Clear the timeout if data is received
        //         resolve(data.charAt(0)); // Resolve with the first character
        //     },
        //     onError: (error: Error) => {
        //         clearTimeout(timer);
        //         console.error('Error reading input:', error);
        //         resolve(null);
        //     }
        // });
    });
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    process.stdin.setRawMode(true);
    process.stdin.on("data", (e) => {
        const input = e[0]!;
    });
    const widgetTree = new Counter(0);
    while (true) {
        const elementTree = widgetTree.createElement();
        render(elementTree.draw());
        const input = prompt("");
        consumeOnClickCbs(input![0]!);
    }
})();
