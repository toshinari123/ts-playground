import type { Frame } from "./frame.ts";

export interface Element {
    draw(): Frame;
}

export function render(frame: Frame) {
    console.clear();
    for (const row of frame) {
        for (const col of row) {
            process.stdout.write(col);
        }
        process.stdout.write("\n");
    }
}

export interface Widget {
    createElement(): Element;
    build(): Widget;
}

var onClickCbs: ((key: string) => void)[] = [];
export function consumeOnClickCbs(key: string) {
    while (onClickCbs.length > 0) {
        const cb = onClickCbs.pop()!;
        cb(key);
    }
}

export function onClick(cb: (key: string) => void) {
    onClickCbs.push(cb);
}
